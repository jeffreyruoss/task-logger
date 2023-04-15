import React from "react";

function TaskItem({ task, currentTask }) {
  return (
    <li
      className={`${currentTask === task ? "bg-green-900" : "bg-gray-800"} p-4 rounded`}
    >
      {currentTask === task && (
        <span className="mr-2 text-white">[Current Task]</span>
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
