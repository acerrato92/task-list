import React, { useState } from "react";
import { useTaskList } from "./useTaskList";

const Header = () => {
  const { tasks } = useTaskList();

  return (
    <div>
      <h1>Lista de tareas</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};
