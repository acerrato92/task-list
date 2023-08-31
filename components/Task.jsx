function Task({ task, toggleTaskCompletion }) {
    return (
      <div className="task">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.name}
        </span>
      </div>
    );
  }
  
  export default Task;