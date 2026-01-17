"use client";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { arrayMove } from "@dnd-kit/sortable";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useLocalStorage("filter", "all");

  //add
  const addTask = useCallback(
    (title) => {
      console.log("add task function called");
      setTasks((prev) => [
        ...prev,
        { id: Date.now(), title, completed: false },
      ]);
    },
    [setTasks]
  );

  //toggle
  const toggleTask = useCallback(
    (id) => {
      console.log("toggle task function rendered");

      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      );
    },
    [setTasks]
  );

  //delete
  const deleteTask = useCallback(
    (id) => {
      console.log("delete task function rendered");

      setTasks((prev) => prev.filter((task) => task.id !== id));
    },
    [setTasks]
  );
 
  const reorderTasks = ( activeId , overId )=> {
    setTasks((prev)=> {
    const oldIndex = prev.findIndex((t) => t.id === activeId);
    const newIndex = prev.findIndex((t) => t.id === overId);
    return arrayMove(prev, oldIndex, newIndex)
    });
  };

  //filter
  const filterTasks = useMemo(() => {
    //memorizes the result of filter function
    if (filter === "completed") {
      return tasks.filter((t) => t.completed);
    }
    if (filter === "pending") {
      return tasks.filter((t) => !t.completed);
    }
    return tasks;
  }, [tasks, filter]);

  const values = useMemo(
    () => ({
      tasks: filterTasks,
      addTask,
      toggleTask,
      deleteTask,
      reorderTasks,
      filter,
      setFilter,
    }),
    [filterTasks, addTask, toggleTask, deleteTask, filter, setFilter]
  );

  return <TaskContext.Provider value={values}>{children}</TaskContext.Provider>;
}

export const useTasks = () => useContext(TaskContext);
