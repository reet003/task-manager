import React, { useState } from 'react';
import TaskInput from './components/Taskinput'
import TaskList from './components/Tasklist'
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (name) => {
    setTasks([
      ...tasks,
      { id: Date.now(), name, completed: false },
    ]);
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <h1 style={{textAlign:'center'}}>Task Manager</h1>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
