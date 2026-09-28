# Personal Portfolio Website

**Skill Nexis — Full Stack Development (MERN Stack) Internship — Week 1, Assignment 1**

A responsive personal portfolio built with plain HTML5 and CSS3 (no JavaScript,
no frameworks), as required by the Week 1 assignment.

## Files

- `index.html` — the page content and structure (semantic HTML5)
- `style.css` — all styling, layout, and responsive rules
- `README.md` — this file

## Sections included

1. **About** — short intro + a "quick facts" side panel (Flexbox layout)
2. **Education** — a vertical timeline list
3. **Projects** — a responsive grid of project cards (CSS Grid)
4. **Contact** — email and social links

## Before submitting

Search the files for square-bracket placeholders like `[Add your email]` and
replace them with your real information:

- Your email address (in the `mailto:` link and the visible text)
- Your LinkedIn URL
- Your GitHub URL
- Your city/country (Quick Facts box)
- Your actual education history
- Your actual project details (title, description, tech used, link)
- The About Me paragraph text

## How to view it

Double-click `index.html`, or open it in a browser via File > Open.
No server or build step is needed — it's a static HTML/CSS page.

## How the responsiveness works

- **Desktop** (wide screens): Projects show in a 3-column grid; About section
  shows text and the facts box side-by-side.
- **Tablet** (≤768px): Projects grid becomes 2 columns; the facts box moves
  to full width below the About text.
- **Mobile** (≤480px): Projects grid becomes 1 column; the header
  navigation stacks vertically instead of sitting in one row.

These breakpoints are controlled by CSS **media queries** at the bottom of
`style.css`.
