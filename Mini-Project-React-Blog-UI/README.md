# React Blog UI

**Skill Nexis — Full Stack Development (MERN Stack) Internship — Week 1, Mini Project**

A small React blog layout that displays post cards loaded from a JSON
file, with live search and category filtering. Built with React + Vite.
No backend, no database, no external UI library.

This is a **separate, independent project** from
`react-components-practice` (Assignment 2) — it does not share files,
`node_modules`, or `package.json` with it.

## Project structure

```
react-blog-ui/
├── package.json
├── vite.config.js
├── index.html
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx              owns state, filters posts, renders everything
    ├── App.css
    ├── index.css
    ├── data/
    │   └── posts.json       6 sample posts across 3 categories
    └── components/
        ├── Header.jsx
        ├── SearchBar.jsx      controlled search input
        ├── CategoryFilter.jsx controlled category buttons
        ├── PostCard.jsx       displays one post
        └── Footer.jsx
```

## How to run this on your own computer

1. Install [Node.js](https://nodejs.org) if you don't already have it.
2. Open a terminal in this folder.
3. Run:
   ```
   npm install
   ```
4. Run:
   ```
   npm run dev
   ```
5. Open the printed URL (usually `http://localhost:5173`).

## Search behavior (exact rules)

- Checks the post's **title AND excerpt** (combined).
- **Case-insensitive** — typing "react" matches "React".
- Updates **live**, on every keystroke (no search button needed).
- Works together with the category filter — a post must match **both**
  the current search text and the current category to be shown.

## Filter behavior

- Category buttons are **generated from the actual data** in
  `posts.json` (using `[...new Set(...)]` to get each unique category
  once), plus an "All" option — not a hardcoded list that could get out
  of sync with the data.
- Selecting "All" removes the category restriction (search still applies).

## Data flow (how everything connects)

```
posts.json
   ↓ (imported directly in App.jsx)
postsData (a plain JS array)
   ↓
searchQuery / selectedCategory (React state, in App.jsx)
   ↓
filteredPosts = postsData.filter(...)   <- recalculated every render,
                                            NOT stored as its own state
   ↓
filteredPosts.map(...)
   ↓
<PostCard title=... excerpt=... category=... /> (props, one per post)
   ↓
Rendered on screen
```

`filteredPosts` is **not** stored in state on purpose: it can always be
worked out again from `postsData` + `searchQuery` + `selectedCategory`,
so storing it separately would just create a second copy that could get
out of sync with the real source of truth.

## Where each React concept lives

| Concept | Where |
|---|---|
| Components | `Header`, `SearchBar`, `CategoryFilter`, `PostCard`, `Footer` |
| Props | `PostCard` receives `title/excerpt/category/author/date`; `SearchBar`/`CategoryFilter` receive their current value + a callback |
| State | `searchQuery`, `selectedCategory` (both in `App.jsx`, via `useState`) |
| Events | `onChange` (search input), `onClick` (category buttons) |
| `.map()` | Rendering `filteredPosts` as `PostCard`s; rendering `categoryOptions` as buttons |
| `.filter()` | Computing `filteredPosts` in `App.jsx` |
| Controlled inputs | `SearchBar`'s `<input>` — its `value` always comes from React state, never from the DOM directly |
| Conditional rendering | Showing "No posts found." instead of the grid when `filteredPosts.length === 0` |

## Known limitation of this build

This project was written and statically checked (JSON validity, import
paths, prop names, filtering logic tested in isolation) but could
**not** be run in a live browser in the environment it was created in,
because that environment has no internet access to download npm
packages. Running `npm install` then `npm run dev` on your own machine
will start it normally.
