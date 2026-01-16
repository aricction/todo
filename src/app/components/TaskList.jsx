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
        <p>No task added</p>
      ) : (
        <ul>
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
