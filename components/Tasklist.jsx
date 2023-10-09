import React, { useState } from "react";
import { useTaskList } from "./useTaskList";

const TaskList = () => {
  const { tasks } = useTaskList();

  return (
    <div>
      <Header tasks={tasks} />
      <Task id={1} title="Tarea 1" />
      <Task id={2} title="Tarea 2" />
    </div>
  );
};
