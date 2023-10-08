import React, { useState, useEffect } from "react";
import { useTaskList } from "./useTaskList";

const Task = ({ id, title }) => {
  const { tasks, createTask, deleteTask, updateTask } = useTaskList();

  return (
    <div>
      <h2>{title}</h2>
      <button onClick={() => deleteTask(id)}>Borrar</button>
      <button onClick={() => updateTask(id, { title: "Nueva tarea" })}>
        Actualizar
      </button>
    </div>
  );
};
