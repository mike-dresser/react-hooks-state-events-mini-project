import React from 'react';

function CategoryFilter({
  categoryArray,
  categorySelect,
  handleCategorySelect,
}) {
  function renderCategories() {
    return categoryArray.map((category) => {
      return (
        <button
          key={category}
          onClick={() => handleCategorySelect(category)}
          className={category === categorySelect ? 'selected' : null}
        >
          {category}
        </button>
      );
    });
  }
  let b = renderCategories();
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderCategories()}
    </div>
  );
}

export default CategoryFilter;
