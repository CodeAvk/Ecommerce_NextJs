// components/TaskModal.tsx
import React, { useState } from "react";
import { Task } from "../types";

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (task: Omit<Task, "id" | "createdDate" | "timeSpent">) => void;
}

function TaskModal({ isOpen, onClose, onSave }: TaskModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [status, setStatus] = useState("Open");
  const [assignee, setAssignee] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = () => {
    if (title && description && assignee) {
      onSave({ title, description, priority, status, assignee, dueDate });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal bg-gray-800 bg-opacity-50 fixed inset-0 flex items-center justify-center">
      <div className="bg-gray-900 p-6 rounded-lg w-96 text-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl text-purple-400">Create a Task</h2>
          <button className="text-red-500 hover:text-red-600" onClick={onClose}>
            ×
          </button>
        </div>
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 mb-2 bg-gray-800 rounded text-white placeholder-gray-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="w-full p-2 mb-2 bg-gray-800 rounded text-white placeholder-gray-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <select
          className="w-full p-2 mb-2 bg-gray-800 rounded text-white"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select
          className="w-full p-2 mb-2 bg-gray-800 rounded text-white"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
        </select>
        <input
          type="text"
          placeholder="Assignee"
          className="w-full p-2 mb-2 bg-gray-800 rounded text-white placeholder-gray-500"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
        />
        <input
          type="date"
          className="w-full p-2 mb-4 bg-gray-800 rounded text-white"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <div className="flex justify-end">
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded mr-2 hover:bg-purple-700"
            onClick={handleSubmit}
          >
            Save
          </button>
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
