import React, { useState } from 'react';

function TaskInput({ onTaskSubmit }) {
  const [taskInput, setTaskInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');

  function handleTaskInputChange(e) {
    setTaskInput(e.target.value);
  }

  function handleCategoryInputChange(e) {
    setCategoryInput(e.target.value);
  }

  function handleKeyUp(e) {
    if (e.key === 'Enter') {
      onTaskSubmit(taskInput, categoryInput);
      setTaskInput('');
      setCategoryInput('');
    }
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter task"
        value={taskInput}
        onChange={handleTaskInputChange}
        onKeyUp={handleKeyUp}
        className="bg-gray-800 text-white placeholder-gray-400 w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="text"
        placeholder="Enter task category"
        value={categoryInput}
        onChange={handleCategoryInputChange}
        onKeyUp={handleKeyUp}
        className="bg-gray-800 text-white placeholder-gray-400 w-full p-2 border border-gray-300 rounded"
      />
    </>
  );
}

export default TaskInput;
