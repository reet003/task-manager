import React from 'react';
import TaskItem from './Taskitem'

const TaskList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        ))
      ) : (
        <p>No tasks to display</p>
      )}
    </div>
  );
};

export default TaskList;
