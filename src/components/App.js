import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import { v4 as uuidv4 } from 'uuid';
import { CATEGORIES, TASKS } from '../data';

function App() {
  let categoryArray = CATEGORIES;
  let taskArray = TASKS.map((task) => {
    return { ...task, id: uuidv4() };
  });

  const [tasks, setTasks] = useState(taskArray);
  const [categorySelect, setCategorySelect] = useState('All');
  const [newTask, setNewTask] = useState({
    text: '',
    category: 'All',
  });

  function handleNewTask(e) {
    e.preventDefault();
    let taskWithId = { ...newTask, id: uuidv4() };
    setTasks([...tasks, taskWithId]);
    setNewTask({ text: '', category: 'All' });
  }

  function handleCategorySelect(category) {
    setCategorySelect(category);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categorySelect={categorySelect}
        categoryArray={categoryArray}
        handleCategorySelect={handleCategorySelect}
      />
      <NewTaskForm
        categoryArray={categoryArray}
        newTask={newTask}
        setNewTask={setNewTask}
        handleNewTask={handleNewTask}
      />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        categorySelect={categorySelect}
      />
    </div>
  );
}

export default App;
