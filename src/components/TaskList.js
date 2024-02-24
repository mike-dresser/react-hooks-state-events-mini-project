import React from 'react';
import Task from './Task';

function TaskList({ tasks, setTasks, categorySelect }) {
  function handleDelete(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => {
        if (categorySelect === 'All' || task.category === categorySelect) {
          return (
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              category={task.category}
              onDelete={handleDelete}
            />
          );
        }
      })}
    </div>
  );
}

export default TaskList;
