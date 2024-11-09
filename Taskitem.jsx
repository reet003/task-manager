// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, completeTask, deleteTask }) => {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span>{task.name}</span>
      <div>
        <button onClick={() => completeTask(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
