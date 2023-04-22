import React from 'react';
import TaskItem from './TaskItem';

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

function TaskList({ tasks, currentTask, setCurrentTask }) {
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
                  <TaskItem key={task.id} task={task} currentTask={currentTask} onStopTask={setCurrentTask} />
                ))}
            </ul>
          </div>
        ))}
    </>
  );
}



export default TaskList;
