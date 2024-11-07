"use client";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TaskCard from "../components/TaskCard";
import TimeTracker from "../components/TimeTracker";
import TaskModal from "../components/TaskModal";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface Task {
  id: string;
  title: string;
  description: string;
  priority: "Low" | "Medium" | "High";
  status: "Open" | "In Progress" | "Resolved";
  assignee: string;
  createdDate: string;
  dueDate?: string;
  timeSpent: number;
}

function Dashboard() {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [filters, setFilters] = useState({
    priority: "All",
    status: "All",
    assignee: "All",
  });

  useEffect(() => {
    const simulatedTasks: Task[] = [
      {
        id: "1",
        title: "Fix login bug",
        description: "Resolve issue with login timeout",
        priority: "High",
        status: "Open",
        assignee: "John Doe",
        createdDate: new Date().toISOString(),
        dueDate: new Date(
          new Date().getTime() + 7 * 24 * 60 * 60 * 1000
        ).toISOString(), // 7 days from now
        timeSpent: 2,
      },
      {
        id: "2",
        title: "Update documentation",
        description: "Add new API endpoints to the docs",
        priority: "Medium",
        status: "In Progress",
        assignee: "Jane Smith",
        createdDate: new Date().toISOString(),
        dueDate: new Date(
          new Date().getTime() + 14 * 24 * 60 * 60 * 1000
        ).toISOString(), // 14 days from now
        timeSpent: 1,
      },
    ];
    setTasks(simulatedTasks);
  }, []);

  const createTask = (
    newTask: Omit<Task, "id" | "createdDate" | "timeSpent">
  ) => {
    const task: Task = {
      ...newTask,
      id: (tasks.length + 1).toString(),
      createdDate: new Date().toISOString(),
      timeSpent: 0,
    } as Task;
    setTasks([...tasks, task]);
    setIsModalOpen(false);
  };

  const editTask = (updatedTask: Task) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null);
  };

  const handleTaskEdit = (task: Task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleTimeLog = (updatedTask: Task, hours: number) => {
    editTask(updatedTask);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filters.priority !== "All" && task.priority !== filters.priority) {
      return false;
    }
    if (filters.status !== "All" && task.status !== filters.status) {
      return false;
    }
    if (filters.assignee !== "All" && task.assignee !== filters.assignee) {
      return false;
    }
    return true;
  });

  const taskTrend = tasks.reduce((acc, task) => {
    const date = new Date(task.createdDate).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = 0;
    }
    acc[date]++;
    return acc;
  }, {} as { [key: string]: number });

  const taskTrendData = Object.entries(taskTrend).map(([date, count]) => ({
    date,
    tasks: count,
  }));

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 py-2">
        <h1 className="text-4xl mb-4">Dashboard</h1>
        <div className="w-full max-w-4xl mb-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => {
                setEditingTask(null);
                setIsModalOpen(true);
              }}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Create New Tas
            </button>
            <div className="flex space-x-4">
              <select
                value={filters.priority}
                onChange={(e) =>
                  setFilters({ ...filters, priority: e.target.value })
                }
                className="px-4 py-2 rounded bg-gray-800 text-white"
              >
                <option value="All">All Priorities</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              <select
                value={filters.status}
                onChange={(e) =>
                  setFilters({ ...filters, status: e.target.value })
                }
                className="px-4 py-2 rounded bg-gray-800 text-white"
              >
                <option value="All">All Statuses</option>
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>
              <select
                value={filters.assignee}
                onChange={(e) =>
                  setFilters({ ...filters, assignee: e.target.value })
                }
                className="px-4 py-2 rounded bg-gray-800 text-white"
              >
                <option value="All">All Assignees</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onEdit={handleTaskEdit}
              onDelete={deleteTask}
              onTimeLog={handleTimeLog}
            />
          ))}
        </div>
        <div className="w-full max-w-4xl mt-8">
          <LineChart width={600} height={400} data={taskTrendData}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="tasks" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className="w-full max-w-2xl mt-8">
          <TimeTracker tasks={tasks} onTimeLog={handleTimeLog} />
        </div>
        <TaskModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingTask(null);
          }}
          onSave={editingTask ? editTask : createTask}
          task={editingTask || undefined}
        />
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;
