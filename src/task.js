import React from 'react';

const Task = ({ task, deleteTask }) => {
  return (
    <li>
      {task}
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
};

export default Task;
