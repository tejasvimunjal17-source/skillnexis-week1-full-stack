// CategoryFilter.jsx
//
// Also a CONTROLLED component, same idea as SearchBar: App.jsx owns
// `selectedCategory` and passes it in, along with the full list of
// available categories and a function to call when one is clicked.
//
// PROPS:
//   - categories: array of category names, e.g. ['All', 'HTML & CSS', ...]
//     (App.jsx builds this list FROM the JSON data, not hardcoded here)
//   - selectedCategory: which one is currently active
//   - onSelect: function to call with the clicked category's name

function CategoryFilter({ categories, selectedCategory, onSelect }) {
  return (
    <div className="category-filter" role="group" aria-label="Filter posts by category">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={
            category === selectedCategory
              ? 'category-button category-button-active'
              : 'category-button'
          }
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
