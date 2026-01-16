"use client";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import { TaskProvider } from "./context/TaskContext";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-black font-sans">
      <main className="px-16 py-32">
        <TaskProvider>
          <Filters />
          <TaskForm />
          <TaskList />
        </TaskProvider>
      </main>
    </div>
  );
}