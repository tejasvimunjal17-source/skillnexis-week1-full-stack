// Card.jsx
//
// A REUSABLE component: App.jsx renders THREE different cards from an
// array of data, using this exact same component each time - just with
// different props.
//
// PROPS used here:
//   - title: heading text for the card
//   - description: short paragraph text
//   - tag: a small label/category shown on the card
//
// STATE used here:
//   - liked: a true/false value that belongs to THIS card only.
//     Each rendered Card gets its OWN independent "liked" state -
//     clicking Like on one card does not affect the others.
//
// EVENT used here:
//   - onClick (via the reusable Button component): clicking the button
//     calls handleLikeClick, which flips the liked state.
//
// DYNAMIC RENDERING: the button's label changes between "Like" and
// "Liked" purely based on the current state - nothing is hardcoded.

import { useState } from 'react';
import Button from './Button';

function Card({ title, description, tag }) {
  const [liked, setLiked] = useState(false);

  function handleLikeClick() {
    setLiked((previousLiked) => !previousLiked);
  }

  return (
    <article className="card">
      {tag && <span className="card-tag">{tag}</span>}
      <h3>{title}</h3>
      <p>{description}</p>
      <Button
        label={liked ? 'Liked' : 'Like'}
        onClick={handleLikeClick}
        variant={liked ? 'secondary' : 'primary'}
      />
    </article>
  );
}

export default Card;
