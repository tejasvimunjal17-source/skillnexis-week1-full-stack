# React Components Practice

**Skill Nexis — Full Stack Development (MERN Stack) Internship — Week 1, Assignment 2**

Five reusable React components (Header, Footer, Card, Button, Form)
demonstrating props, state, dynamic rendering, and React events.
Built with React + Vite. No backend, no database, no external UI library.

## Project structure

```
react-components-practice/
├── package.json
├── vite.config.js
├── index.html
├── README.md
└── src/
    ├── main.jsx          entry point - mounts App into the page
    ├── App.jsx           assembles all 5 components together
    ├── App.css           styling
    ├── index.css         base reset
    ├── data/
    │   └── cardsData.js  sample data used to demonstrate dynamic rendering
    └── components/
        ├── Header.jsx
        ├── Footer.jsx
        ├── Card.jsx
        ├── Button.jsx
        └── Form.jsx
```

## How to run this on your own computer

This project needs Node.js and an internet connection **once**, to download
React and Vite. After that, no internet is needed to keep running it.

1. Install [Node.js](https://nodejs.org) if you don't already have it.
2. Open a terminal in this folder.
3. Run:
   ```
   npm install
   ```
   (this downloads React, ReactDOM, and Vite — only needed once)
4. Run:
   ```
   npm run dev
   ```
5. Open the URL it prints (usually `http://localhost:5173`) in your browser.

## What each component demonstrates

| Component | Concept shown |
|---|---|
| `Header.jsx` | Props (a string + an array), dynamic list rendering via `.map()` |
| `Footer.jsx` | Simple props (string, number) |
| `Card.jsx` | Props (data-driven content) **and** its own local state (`liked`) |
| `Button.jsx` | A fully generic, reusable component — used 3 times with different props |
| `Form.jsx` | State for controlled inputs, `onChange`, `onSubmit` events |

## Where to look for each concept (for your own understanding / interview prep)

- **Props**: `Header.jsx` and `Footer.jsx` destructure their props directly
  in the function signature: `function Header({ siteTitle, navLinks })`.
- **State**: search for `useState` in `Card.jsx` and `Form.jsx`.
- **Dynamic rendering**: `cardsData.map(...)` in `App.jsx` (renders a
  variable number of cards from an array), and `navLinks.map(...)` in
  `Header.jsx`.
- **Events**: `onClick` in `Card.jsx`/`Button.jsx`, `onChange` and
  `onSubmit` in `Form.jsx`.
- **Reusability**: `Button.jsx` is used inside both `Card.jsx` and
  `Form.jsx` with different props each time — proof it's genuinely reusable,
  not copy-pasted.

## Known limitation of this build

This project was written and statically checked (import paths, prop names,
bracket balance, hook usage) but could **not** be run in a live browser in
the environment it was created in, because that environment has no internet
access to download the npm packages. Running `npm install` followed by
`npm run dev` on your own machine will start it normally.
