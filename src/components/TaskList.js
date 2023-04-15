import React from 'react';

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <strong>Task:</strong> {task.task} | <strong>Category:</strong> {task.category} |{' '}
          <strong>Start Time:</strong> {task.startTime}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
