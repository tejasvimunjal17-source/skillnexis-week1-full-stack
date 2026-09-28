// Footer.jsx
//
// A REUSABLE component that displays a copyright line.
// Like Header, it takes its content through PROPS instead of
// hardcoding a name/year, so it could be reused for any project.
//
// PROPS used here:
//   - author: a string (name to display)
//   - year: a number (year to display)

function Footer({ author, year }) {
  return (
    <footer className="site-footer">
      <p>
        &copy; {year} {author}. Built with React as part of the Skill Nexis
        Full Stack Development (MERN) internship.
      </p>
    </footer>
  );
}

export default Footer;
