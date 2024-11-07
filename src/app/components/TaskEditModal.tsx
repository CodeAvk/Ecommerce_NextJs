import React, { useState } from "react";

interface Task {
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  status: "Open" | "In Progress" | "Resolved";
  assignee: string;
  createdDate: string;
  timeSpent: number;
}

interface TaskEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Task) => void;
  task: Task | null;
}

const TaskEditModal: React.FC<TaskEditModalProps> = ({
  isOpen,
  onClose,
  onSave,
  task,
}) => {
  const [editingTask, setEditingTask] = useState<Task | null>(task);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setEditingTask((prevTask) =>
      prevTask
        ? {
            ...prevTask,
            [name]: value,
          }
        : null
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTask) {
      onSave(editingTask);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 rounded p-6 shadow-md w-96">
        <h2 className="text-2xl mb-4 text-purple-500">Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300">Title</label>
            <input
              type="text"
              name="title"
              value={editingTask?.title || ""}
              onChange={handleChange}
              className="border border-gray-600 rounded w-full py-2 px-3 text-gray-300 bg-gray-900"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Description</label>
            <textarea
              name="description"
              value={editingTask?.description || ""}
              onChange={handleChange}
              className="border border-gray-600 rounded w-full py-2 px-3 text-gray-300 bg-gray-900"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Priority</label>
            <select
              name="priority"
              value={editingTask?.priority || ""}
              onChange={handleChange}
              className="border border-gray-600 rounded w-full py-2 px-3 text-gray-300 bg-gray-900"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Status</label>
            <select
              name="status"
              value={editingTask?.status || ""}
              onChange={handleChange}
              className="border border-gray-600 rounded w-full py-2 px-3 text-gray-300 bg-gray-900"
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-300">Assignee</label>
            <input
              type="text"
              name="assignee"
              value={editingTask?.assignee || ""}
              onChange={handleChange}
              className="border border-gray-600 rounded w-full py-2 px-3 text-gray-300 bg-gray-900"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors duration-300"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskEditModal;
