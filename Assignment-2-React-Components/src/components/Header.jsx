// Header.jsx
//
// A REUSABLE component: it doesn't hardcode a site name or menu links.
// Instead, it receives them as PROPS from whichever parent uses it.
// This means the exact same Header could be reused on a totally
// different page just by passing different props.
//
// PROPS used here:
//   - siteTitle: a string, shown as the logo/site name
//   - navLinks: an array of { id, label, href } objects
//
// DYNAMIC RENDERING: navLinks.map(...) turns the array into a list of
// <li> elements automatically. Add or remove an item from the array,
// and the menu updates itself - no manual HTML editing needed.

function Header({ siteTitle, navLinks }) {
  return (
    <header className="site-header">
      <p className="logo">{siteTitle}</p>
      <nav aria-label="Primary navigation">
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
