import React, { useState } from 'react';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');
  const [currentTask, setCurrentTask] = useState(null);


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
      endTime: null,
    };
  
    if (currentTask) {
      currentTask.endTime = new Date().toLocaleString();
    }
  
    setTasks([...tasks, newTask]);
    setCurrentTask(newTask);
    setTaskInput('');
    setCategoryInput('');
  }
  

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto py-10 px-10">
        <h1 className="text-4xl font-bold mb-6">Task Logger</h1>
        <div className="flex space-x-4 mb-6">
          <input
            type="text"
            placeholder="Enter task"
            value={taskInput}
            onChange={handleTaskInputChange}
            onKeyPress={handleKeyPress}
            className="bg-gray-700 text-white placeholder-gray-400 w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Enter task category"
            value={categoryInput}
            onChange={handleCategoryInputChange}
            onKeyPress={handleKeyPress}
            className="bg-gray-700 text-white placeholder-gray-400 w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <TaskList tasks={tasks} currentTask={currentTask} />
      </div>
    </div>
  );
  
  
}

export default App;
