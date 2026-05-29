import React from 'react';
import './FeaturedPost.css';

export default function FeaturedPost({ post }) {
  return (
    <section className="featured">
      <div className="featured__inner">
        <div className="featured__image-wrap">
          <img src={post.image} alt={post.title} className="featured__image" />
          <div className="featured__image-overlay" />
        </div>
        <div className="featured__content">
          <span className="featured__label">Featured Essay</span>
          <div className="featured__category">{post.category}</div>
          <h2 className="featured__title">{post.title}</h2>
          <p className="featured__excerpt">{post.excerpt}</p>
          <div className="featured__byline">
            <span className="featured__author">{post.author}</span>
            <span className="featured__sep">·</span>
            <span className="featured__meta">{post.date}</span>
            <span className="featured__sep">·</span>
            <span className="featured__meta">{post.readTime}</span>
          </div>
          <button className="featured__cta">
            Read Essay
            <span className="featured__arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
