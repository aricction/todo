"use client";
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
const TaskItem = React.memo(({ task, onToggle, onDelete }) => {

  const {setNodeRef, attributes , listeners , transform , transition } = useSortable({ id: task.id})

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }
  return (
    <li 
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    className="flex items-center justify-between gap-3 py-3 px-4 rounded-lg   border border-gray-200  hover:bg-gray-700  transition-colors sm:w-full">
        <span className="text-gray-400 cursor-grab active:cursor-grabbing">⋮⋮</span>

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
});

TaskItem.displayName = "TaskItem";

export default TaskItem;