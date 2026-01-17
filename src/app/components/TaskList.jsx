"use client";

import { useTasks } from "../context/TaskContext";
import TaskItem from "./TaskItem";
import { useMounted } from "../hooks/useMounted";
function TaskList() {
  const mounted = useMounted();

  const { tasks, toggleTask, deleteTask } = useTasks();

  if (!mounted) return null;
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center py-8">No task added</p>
      ) : (
        <ul className="space-y-2">
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
