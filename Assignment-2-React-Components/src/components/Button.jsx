// Button.jsx
//
// The most REUSABLE component in this project. It knows nothing about
// WHERE it is used or WHAT it does when clicked - it just displays a
// label and forwards clicks to whatever function its parent gave it.
// This same Button is used inside Card.jsx (as a "Like" button) AND
// inside Form.jsx (as a "Submit" button), with different props each time.
//
// PROPS used here:
//   - label: text shown on the button
//   - onClick: a function to run when clicked (passed in by the parent)
//   - type: the native HTML button type ("button" or "submit")
//   - variant: which style to apply ("primary" or "secondary") - has a
//     default value, so callers don't have to specify it every time
//
// EVENT used here:
//   - onClick: React's way of listening for a click. This component
//     doesn't decide what happens on click - it just passes the event
//     along to whichever function was given to it as a prop.

function Button({ label, onClick, type = 'button', variant = 'primary' }) {
  return (
    <button type={type} className={`btn btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
