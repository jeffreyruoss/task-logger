import React from 'react';

function groupByDate(tasks) {
  return tasks.reduce((groupedTasks, task) => {
    const date = new Date(task.startTime).toLocaleDateString();
    if (!groupedTasks[date]) {
      groupedTasks[date] = [];
    }
    groupedTasks[date].push(task);
    return groupedTasks;
  }, {});
}  

function TaskList({ tasks, currentTask }) {
  const groupedTasks = groupByDate(tasks);

  return (
    <>
      {Object.keys(groupedTasks)
        .sort((a, b) => new Date(b).getTime() - new Date(a).getTime()) // Sort dates in descending order
        .map((date) => (
          <div key={date} className="mb-4">
            <h2 className="text-xl font-bold">{date}</h2>
            <ul className="space-y-2">
              {groupedTasks[date]
                .slice() // Create a shallow copy of the tasks array
                .sort((a, b) => new Date(b.startTime) - new Date(a.startTime)) // Sort tasks in descending order
                .map((task) => (
                  <li
                    key={task.id}
                    className={`${currentTask === task ? 'bg-green-900' : 'bg-gray-800'} p-4 rounded`}
                  >
                    {currentTask === task && <span className="mr-2 text-white">[Current Task]</span>}
                    <strong>Task:</strong> {task.task} | <strong>Category:</strong> {task.category} |{' '}
                    <strong>Start Time:</strong> {new Date(task.startTime).toLocaleTimeString()}
                    {task.endTime && (
                      <>
                        {' '}
                        | <strong>End Time:</strong> {new Date(task.endTime).toLocaleTimeString()}
                      </>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </>
  );
}



export default TaskList;
