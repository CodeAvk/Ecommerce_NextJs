// components/TimeTracker.tsx
import React from "react";
import { Task } from "../types";

interface TimeTrackerProps {
  tasks: Task[];
  onTimeLog: (task: Task) => void;
}

function TimeTracker({ tasks, onTimeLog }: TimeTrackerProps) {
  const logTime = (taskId: string, hours: number) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      task.timeSpent += hours;
      onTimeLog(task);
    }
  };

  return (
    <div className="time-tracker">
      <h3 className="text-xl">Time Tracker</h3>
      {tasks.map((task) => (
        <div key={task.id} className="mt-2">
          <span>
            {task.title}: {task.timeSpent} hours
          </span>
          <button onClick={() => logTime(task.id, 1)}>+1 Hour</button>
        </div>
      ))}
    </div>
  );
}

export default TimeTracker;
