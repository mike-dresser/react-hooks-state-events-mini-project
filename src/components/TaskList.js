import React from 'react';
import Task from './Task';

function TaskList({ tasks, setTasks }) {
  function handleDelete(key) {
    // const updatedTasks = tasks.filter((task) => task.key !== e.target.key);
    // setTasks(updatedTasks);
  }
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task) => {
        console.log('in taskList');
        console.log(task);

        return (
          <Task
            key={task.id}
            // id={task.id}
            text={task.text}
            category={task.category}
            onDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
