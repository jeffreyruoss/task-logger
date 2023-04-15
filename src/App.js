import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskInput from './components/TaskInput';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');
  const [currentTask, setCurrentTask] = useState(null);

  function handleTaskSubmit(task, category) {
    addTask(task, category);
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
          <TaskInput onTaskSubmit={handleTaskSubmit} />
        </div>
        <TaskList tasks={tasks} currentTask={currentTask} />
      </div>
    </div>
  );
  
  
}

export default App;
