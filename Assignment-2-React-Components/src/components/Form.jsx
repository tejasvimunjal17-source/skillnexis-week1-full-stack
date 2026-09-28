// Form.jsx
//
// A REUSABLE, self-contained form component. It manages its own data
// and doesn't need any props to function - it could be dropped into
// any page.
//
// STATE used here:
//   - formData: an object holding the current value of every input
//     ({ name: '', message: '' }). This is what makes the inputs
//     "controlled" - React state is the single source of truth for
//     what's currently typed in each field.
//   - submitted: a true/false flag that tracks whether the form has
//     been submitted, so we can show a confirmation message.
//
// EVENTS used here:
//   - onChange: fires on every keystroke in an input/textarea. We read
//     event.target.name and event.target.value to know WHICH field
//     changed and update just that one field in formData.
//   - onSubmit: fires when the form is submitted (e.g. clicking the
//     Submit button). event.preventDefault() stops the browser's
//     default full-page-reload behaviour, which is required in React
//     since we're handling the submission ourselves.
//
// DYNAMIC RENDERING: the confirmation paragraph only appears after
// submitted becomes true, and it uses the typed name from state.
//
// REUSABILITY: this form reuses the same Button component used in
// Card.jsx, just with different props (label="Submit", type="submit").

import { useState } from 'react';
import Button from './Button';

function Form() {
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form className="practice-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <Button label="Submit" type="submit" variant="primary" />

      {submitted && (
        <p className="form-confirmation" role="status">
          Thanks{formData.name ? `, ${formData.name}` : ''}! Your message has
          been received. (This is a practice form for React state/events -
          nothing is actually sent anywhere.)
        </p>
      )}
    </form>
  );
}

export default Form;
