import React from 'react';

function NewTaskForm({ categoryArray, newTask, setNewTask, handleNewTask }) {
  function renderCategoryOptions() {
    return categoryArray.map((category) => {
      return (
        <option key={category} value={category}>
          {category}
        </option>
      );
    });
  }
  return (
    <form className="new-task-form" onSubmit={(e) => handleNewTask(e)}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={newTask.text}
          onChange={(e) => setNewTask({ ...newTask, text: e.target.value })}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={newTask.category}
          onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
        >
          {renderCategoryOptions()}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
