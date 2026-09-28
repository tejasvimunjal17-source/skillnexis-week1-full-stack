// App.jsx
//
// This is where the actual blog logic lives: it owns the search and
// category state, filters the posts, and renders the results.
//
// DATA FLOW (see README for the full explanation):
//   posts.json -> imported here as postsData
//   -> searchQuery/selectedCategory state
//   -> filteredPosts (calculated fresh every render, NOT stored as state)
//   -> filteredPosts.map() -> <PostCard> receives each post via props

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import PostCard from './components/PostCard';
import postsData from './data/posts.json';
import './App.css';

// Category button list is DERIVED from the data, not hardcoded:
// Set() removes duplicates, then we add "All" at the front.
const categoryOptions = ['All', ...new Set(postsData.map((post) => post.category))];

function App() {
  // STATE: what the user has typed into the search box.
  const [searchQuery, setSearchQuery] = useState('');

  // STATE: which category button is currently selected.
  const [selectedCategory, setSelectedCategory] = useState('All');

  // FILTERING: this is plain JavaScript, recalculated on every render.
  // We deliberately do NOT store this result in its own state, because
  // it can always be derived from postsData + searchQuery + selectedCategory -
  // storing it separately would just be a second source of truth to keep in sync.
  const filteredPosts = postsData.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;

    // Search checks BOTH the title and the excerpt, case-insensitively.
    const searchableText = `${post.title} ${post.excerpt}`.toLowerCase();
    const matchesSearch = searchableText.includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="app">
      <Header siteTitle="React Blog UI" />

      <main>
        <section className="controls-section">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <CategoryFilter
            categories={categoryOptions}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </section>

        <section className="posts-section">
          {filteredPosts.length === 0 ? (
            <p className="empty-state">No posts found.</p>
          ) : (
            <div className="posts-grid">
              {filteredPosts.map((post) => (
                <PostCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  author={post.author}
                  date={post.date}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer author="Tejasvi Munjal" year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
