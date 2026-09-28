// Footer.jsx
//
// Same reusable pattern as Assignment 2's Footer.

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
