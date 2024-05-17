import React, { useState } from 'react';
import Task from './task';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  const cancelTask = () => {
    setNewTask('');
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
        <button onClick={cancelTask}>Cancel</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <Task key={index} task={task} deleteTask={() => deleteTask(index)} />
        ))}
      </ul>
    </div>
  );
}

export default App;