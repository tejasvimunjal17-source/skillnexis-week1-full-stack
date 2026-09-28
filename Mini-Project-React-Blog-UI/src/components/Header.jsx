// Header.jsx
//
// Simple, reusable header - same pattern as Assignment 2's Header:
// content comes in through props, nothing is hardcoded here.

function Header({ siteTitle }) {
  return (
    <header className="site-header">
      <p className="logo">{siteTitle}</p>
    </header>
  );
}

export default Header;
