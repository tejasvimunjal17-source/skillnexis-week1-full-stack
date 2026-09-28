// PostCard.jsx
//
// A REUSABLE component: App.jsx renders one of these per post in the
// (filtered) posts array, using .map(). This component itself has no
// state - it purely displays whatever props it's given.

function PostCard({ title, excerpt, category, author, date }) {
  return (
    <article className="post-card">
      <span className="post-category">{category}</span>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <p className="post-meta">
        {author} &middot; {date}
      </p>
    </article>
  );
}

export default PostCard;
