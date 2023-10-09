import React, { useState, useEffect } from "react";

export default function useTaskList() {
  const [tasks, setTasks] = useState([]);

  // Función para crear una tarea
  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Función para borrar una tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Función para actualizar una tarea
  const updateTask = (id, task) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return task;
      } else {
        return task;
      }
    }));
  };

  return {
    tasks,
    createTask,
    deleteTask,
    updateTask,
  };
}
