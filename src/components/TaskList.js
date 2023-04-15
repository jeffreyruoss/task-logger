import React from 'react';

function TaskList({ tasks, currentTask }) {
  return (
    <ul className="space-y-2">
      {tasks.slice().reverse().map((task) => (
        <li key={task.id} className={`${currentTask === task ? 'bg-green-300' : 'bg-gray-200'} p-4 rounded`}>
          {currentTask === task && <span className="mr-2">[Current Task]</span>}
          <strong>Task:</strong> {task.task} | <strong>Category:</strong> {task.category} |{' '}
          <strong>Start Time:</strong> {task.startTime}
          {task.endTime && (
            <>
              {' '}
              | <strong>End Time:</strong> {task.endTime}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
