"use client";

import React from "react";
import { useTasks } from "../context/TaskContext";
import TaskItem from "./TaskItem";
import { useMounted } from "../hooks/useMounted";
import { DndContext , closestCenter  } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";

const TaskList = React.memo(() => {
  const mounted = useMounted();

  const { tasks, toggleTask, deleteTask , reorderTasks} = useTasks();
 

  const handleDragEnd = ({active , over}) => {
    if(!over || active.id === over.id ) return ;
    reorderTasks(active.id , over.id);
  }
  if (!mounted) return null;
  return (
    <div>

      {tasks.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400 text-center py-8">No task added</p>
      ) : (
        <DndContext collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}>
         <SortableContext
         items = {tasks.map((tasks) => tasks.id)}
         strategy={verticalListSortingStrategy}>

        <ul className="space-y-2">
          {tasks.map((task) => (
            <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
            />
          ))}
        </ul>
          </SortableContext>
          </DndContext>
      )}
    </div>
  );
});

TaskList.displayName = "TaskList";  //Makes React DevTools readable

export default TaskList;
