"use client";
import {  createContext, useCallback, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TaskContext = createContext();

export function TaskProvider({children}) {
    const [tasks, setTasks] = useLocalStorage("tasks",[])
  const [filter, setFilter] = useLocalStorage("filter", "all");
   


    const addTask = useCallback((title)=> {
       console.log("add task function called")
       setTasks((prev)=> [...prev, {id: Date.now(), title,  completed: false }])
    },[setTasks])


    const toggleTask = (id)=> {
                console.log("toggle task function rendered")

        setTasks((prev)=> prev.map(task => task.id ===id ?
            {...task, completed: !task.completed}: task
        ))
    }

    const deleteTask = (id)=> {
                console.log("delete task function rendered")

        setTasks((prev)=> prev.filter(task => task.id !== id))
    }

    const filterTasks = (task)=> {
        if(filter === "completed"){
            return task.filter( t=> t.completed);
        
        }
        if(filter === "pending"){
            return task.filter( t => !t.completed);
        }
        return task;
    }

    const values = {
        tasks: filterTasks(tasks),
        addTask,
        toggleTask,
        deleteTask,
        filter,
        setFilter,
    }

    return (
        <TaskContext.Provider value = {values}>
            {children}
        </TaskContext.Provider>
    )
}

export const useTasks = () => useContext(TaskContext);
