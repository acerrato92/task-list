//import React from 'react';
import React, { useState, useEffect } from 'react';
import React from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import useTaskManager from "./useTaskManager";
import './styles.css';
import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={task}
        onChange={handleTaskChange}
        placeholder="Nueva tarea"
      />
      <button onClick={handleAddTask}>Agregar tarea</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
}


function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Cargar tareas desde localStorage al cargar la aplicación
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Guardar tareas en localStorage cuando cambian
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    // Guardar tareas en localStorage cuando cambian
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskToggle = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const addTask = (description) => {
    const newTask = {
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

 
  return (
    <div>
      <h1>My Task List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskToggle(index)}
              />
              {task.description}
            </label>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTask(e.target.value);
              e.target.value = '';
            }
          }}
        />
      </div>
      <div>
      <TaskForm onAdd={addTask} />
    </div>
  
    </div>
  );


}

export default App;