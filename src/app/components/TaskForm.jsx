"use client";
import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

const TaskForm = React.memo(() => {
     
  const [input, setInput] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    addTask(input.trim());
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 lg:mb-10">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
        
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
          className="w-full sm:flex-1 border border-gray-300 dark:border-gray-600 rounded px-4 py-2 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-colors"
        />

        <button
          type="submit"
          disabled={!input.trim()}
          className="
            w-full sm:w-[110px] h-[42px]
            bg-blue-600 dark:bg-blue-500 text-white rounded-md
            hover:bg-blue-700 dark:hover:bg-blue-600 transition
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          Add
        </button>

      </div>
    </form>
  );
});

export default TaskForm;
