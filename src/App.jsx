//import React from 'react';
import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import TaskList from "../components/Tasklist";
import './styles.css';

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
    </div>
  );


}

export default App;