import React, { useState, useEffect } from 'react';
import './Header.css';

const navLinks = ['Essays', 'Culture', 'Philosophy', 'About'];

export default function Header({ onCategorySelect }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <div className="header__rule-top" />

        <div className="header__meta">
          <span className="header__issue">Issue XII · May 2026</span>
          <span className="header__tagline">Thought. Culture. Letters.</span>
        </div>

        <div className="header__brand" onClick={() => onCategorySelect('All')}>
          <h1 className="header__title">The Quarterly</h1>
          <p className="header__subtitle">A Journal of Ideas</p>
        </div>

        <nav className="header__nav">
          {navLinks.map(link => (
            <button
              key={link}
              className="header__nav-link"
              onClick={() => onCategorySelect(link === 'Essays' ? 'Essay' : link)}
            >
              {link}
            </button>
          ))}
          <button className="header__subscribe">Subscribe</button>
        </nav>

        <button className="header__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>

        <div className="header__rule-bottom" />
      </div>

      {menuOpen && (
        <div className="header__mobile-menu">
          {navLinks.map(link => (
            <button
              key={link}
              className="header__mobile-link"
              onClick={() => { onCategorySelect(link === 'Essays' ? 'Essay' : link); setMenuOpen(false); }}
            >
              {link}
            </button>
          ))}
          <button className="header__subscribe header__subscribe--mobile">Subscribe</button>
        </div>
      )}
    </header>
  );
}
