"use client";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import DarkMode from "./components/darkMode";
import { TaskProvider } from "./context/TaskContext";
import { ThemeProvider } from "./context/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen items-center justify-center bg-white font-sans ">
        <main className="px-16 py-32">
          <TaskProvider>
            <DarkMode />
            <Filters />
            <TaskForm />
            <TaskList />
          </TaskProvider>
        </main>
      </div>
    </ThemeProvider>
  );
}
