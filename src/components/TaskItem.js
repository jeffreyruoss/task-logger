import React from "react";

function TaskItem({ task, currentTask, onStopTask }) {
  function handleStopTask() {
    onStopTask(null);
  }

  return (
    <li
      className={`${currentTask === task ? "bg-green-900" : "bg-gray-800"} p-4 rounded`}
    >
      {currentTask === task && (
        <>
          <span className="mr-2 text-white">[Current Task]</span>
          <button
            onClick={handleStopTask}
            className="bg-red-500 text-white px-2 py-1 rounded ml-2"
          >
            Stop
          </button>
        </>
      )}
      <div className="flex flex-wrap">
        <span className="font-semibold mr-1">Task:</span>
        <span className="mr-4">{task.task}</span>
        <span className="font-semibold mr-1">Category:</span>
        <span className="mr-4">{task.category}</span>
        <span className="font-semibold mr-1">Start Time:</span>
        <span className="mr-4">
          {new Date(task.startTime).toLocaleTimeString()}
        </span>
        {task.endTime && (
          <>
            <span className="font-semibold mr-1">End Time:</span>
            <span>
              {new Date(task.endTime).toLocaleTimeString()}
            </span>
          </>
        )}
      </div>
    </li>
  );
}

export default TaskItem;
