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
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            Stop
          </button>
        </>
      )}
      <strong>Task:</strong> {task.task} | <strong>Category:</strong>{" "}
      {task.category} | <strong>Start Time:</strong>{" "}
      {new Date(task.startTime).toLocaleTimeString()}
      {task.endTime && (
        <>
          {" "}
          | <strong>End Time:</strong>{" "}
          {new Date(task.endTime).toLocaleTimeString()}
        </>
      )}
    </li>
  );
}

export default TaskItem;
