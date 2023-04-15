import React, { useState } from 'react';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');

  function handleTaskInputChange(event) {
    setTaskInput(event.target.value);
  }
  
  function handleCategoryInputChange(event) {
    setCategoryInput(event.target.value);
  }
  
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  }
  
  function addTask() {
    const newTask = {
      id: new Date().getTime(),
      task: taskInput,
      category: categoryInput,
      startTime: new Date().toLocaleString(),
    };
  
    setTasks([...tasks, newTask]);
    setTaskInput('');
    setCategoryInput('');
  }

  return (
    <div className="App">
      <h1>Task Log</h1>
      <input
        type="text"
        placeholder="Enter task"
        value={taskInput}
        onChange={handleTaskInputChange}
        onKeyPress={handleKeyPress}
      />
      <input
        type="text"
        placeholder="Enter task category"
        value={categoryInput}
        onChange={handleCategoryInputChange}
        onKeyPress={handleKeyPress}
      />
      <TaskList tasks={tasks} />
    </div>
  );
  
}

export default App;
