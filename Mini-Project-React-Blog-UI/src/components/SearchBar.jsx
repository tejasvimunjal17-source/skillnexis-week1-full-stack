// SearchBar.jsx
//
// A CONTROLLED component: it does NOT own the search text itself.
// App.jsx owns the actual `searchQuery` state and passes it down as
// `value`, plus a function (`onChange`) to call whenever the user types.
// This means SearchBar just displays whatever value it's given and
// reports keystrokes upward - it never decides the value on its own.
//
// Why the state lives in App and not here: App is the component that
// actually needs to filter the post list, so App is the one place
// that needs to know the current search text.

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <label htmlFor="search-input" className="visually-hidden">
        Search posts
      </label>
      <input
        id="search-input"
        type="text"
        placeholder="Search posts by title or excerpt..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
