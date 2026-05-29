import React from 'react';
import './CategoryBar.css';

export default function CategoryBar({ categories, active, onSelect }) {
  return (
    <div className="catbar">
      <div className="catbar__inner">
        <div className="catbar__rule" />
        <div className="catbar__items">
          {categories.map(cat => (
            <button
              key={cat}
              className={`catbar__item ${active === cat ? 'catbar__item--active' : ''}`}
              onClick={() => onSelect(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="catbar__rule" />
      </div>
    </div>
  );
}
