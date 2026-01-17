"use client";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import { ModeToggle } from "./components/darkMode";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white font-sans transition-colors duration-200">
      <main className="px-4 sm:px-12 lg:px-16 py-16 sm:py-6  w-full max-w-2xl">
       <div className="flex justify-end">
       <ModeToggle/>
       </div>
        <Filters />
        <TaskForm />
        <TaskList />
      </main>
    </div>
  );
}