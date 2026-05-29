import React from 'react';
import './PostCard.css';

export default function PostCard({ post, index }) {
  return (
    <article
      className="card"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      <div className="card__image-wrap">
        <img src={post.image} alt={post.title} className="card__image" />
        <span className="card__category">{post.category}</span>
      </div>
      <div className="card__body">
        <h3 className="card__title">{post.title}</h3>
        <p className="card__excerpt">{post.excerpt}</p>
        <div className="card__footer">
          <div className="card__byline">
            <span className="card__author">{post.author}</span>
            <span className="card__sep">·</span>
            <span className="card__meta">{post.readTime}</span>
          </div>
          <span className="card__date">{post.date}</span>
        </div>
        <div className="card__read">
          Read <span className="card__arrow">→</span>
        </div>
      </div>
    </article>
  );
}
