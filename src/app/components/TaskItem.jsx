"use client";

const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li className="flex items-center justify-between gap-3 py-3 px-4 rounded-lg   border border-gray-200  hover:bg-gray-700  transition-colors sm:w-full">
      <span
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer flex-1 ${
          task.completed 
            ? "line-through text-gray-400 hover:text-white" 
            : "text-gray-900 dark:text-gray-100 hover:text-white"
        }`}
      >
        {task.title}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 dark:text-red-400 hover:text-red-700  transition-colors px-2 py-1 rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;