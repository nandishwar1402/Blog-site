import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FeaturedPost from './components/FeaturedPost';
import CategoryBar from './components/CategoryBar';
import PostCard from './components/PostCard';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { posts, categories } from './data/posts';

function App() {
  const [activeCategory, setActiveCategory] = useState('All');

  const featured = posts.find(p => p.featured);
  const filtered = posts
    .filter(p => !p.featured)
    .filter(p => activeCategory === 'All' || p.category === activeCategory);

  return (
    <div className="app">
      <Header onCategorySelect={setActiveCategory} />

      {activeCategory === 'All' && featured && (
        <FeaturedPost post={featured} />
      )}

      <main className="main">
        <CategoryBar
          categories={categories}
          active={activeCategory}
          onSelect={setActiveCategory}
        />

        {filtered.length === 0 ? (
          <div className="main__empty">
            <p>No essays in this section yet.</p>
          </div>
        ) : (
          <div className="main__grid">
            {filtered.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </div>
        )}
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
