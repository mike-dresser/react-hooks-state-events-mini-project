import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';
import { v4 as uuidv4 } from 'uuid';

import { CATEGORIES, TASKS } from '../data';
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  let taskArray = TASKS.map((task) => {
    return { ...task, id: uuidv4() };
  });

  const [tasks, setTasks] = useState(taskArray);
  console.log(tasks);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      {/* <TaskList tasks={tasks} setTasks={setTasks} /> */}
    </div>
  );
}

export default App;
