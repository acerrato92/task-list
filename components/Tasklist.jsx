import React from "react";
import Task from "./Task";

const TaskList = () => {
    
  const tasks = [
    {
        id: 1,
      name: "Comprar leche",
      done: false,
    },
    {
        id: 2,
      name: "Lavar los platos",
      done: true,
    },
    {
        id: 3,
      name: "Sacar la basura",
      done: false,
    },
  ];

  return (
    <div>
         
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    
    </ul>
    </div>
   
  );
};

export default TaskList;
