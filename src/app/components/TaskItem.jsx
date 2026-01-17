"use client";
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TaskItem = React.memo(({ task, onToggle, onDelete }) => {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="flex items-center gap-3 py-3 px-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 transition-colors"
    >
      {/* DRAG HANDLE ONLY */}
      <span
        {...attributes}
        {...listeners}
        className="cursor-grab active:cursor-grabbing text-gray-400 select-none touch-none"
        aria-label="Drag task"
      >
        ⋮⋮
      </span>

      {/* Task title (click-safe) */}
      <span
        onClick={() => onToggle(task.id)}
        className={`flex-1 cursor-pointer ${
          task.completed
            ? "line-through text-gray-400"
            : "text-gray-900 dark:text-gray-100"
        }`}
      >
        {task.title}
      </span>

      {/* Delete button (drag-safe) */}
      <button
        onClick={() => onDelete(task.id)}
        className="text-red-500 dark:text-red-400 hover:text-red-700 px-2 py-1 rounded"
      >
        Delete
      </button>
    </li>
  );
});

TaskItem.displayName = "TaskItem";
export default TaskItem;
