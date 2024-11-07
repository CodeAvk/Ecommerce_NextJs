// components/TaskCard.tsx
import React from "react";
import { Task } from "../types";

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
  return (
    <div className="task-card bg-gray-800 p-4 shadow-md rounded text-white">
      <h3 className="text-xl font-bold text-purple-400">{task.title}</h3>
      <p className="text-gray-300">{task.description}</p>
      <div className="flex justify-between mt-2">
        <span className="badge text-purple-300">{task.priority}</span>
        <span className="badge text-purple-300">{task.status}</span>
      </div>
      <div className="mt-2">
        <button
          className="bg-purple-600 text-white px-2 py-1 rounded mr-2 hover:bg-purple-700"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>
        <button
          className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
