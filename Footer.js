import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__rule" />
        <div className="footer__grid">
          <div className="footer__brand">
            <h3 className="footer__title">The Quarterly</h3>
            <p className="footer__desc">A journal of essays, culture, and ideas. Published since 2014.</p>
          </div>
          <div className="footer__col">
            <h4 className="footer__heading">Sections</h4>
            <ul className="footer__list">
              {['Essays', 'Culture', 'Philosophy', 'Travel', 'Literature', 'Science'].map(s => (
                <li key={s}><a href="#" className="footer__link">{s}</a></li>
              ))}
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__heading">Journal</h4>
            <ul className="footer__list">
              {['About', 'Contributors', 'Archive', 'Contact', 'Subscribe'].map(s => (
                <li key={s}><a href="#" className="footer__link">{s}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__rule" />
        <div className="footer__bottom">
          <span>© 2026 The Quarterly. All rights reserved.</span>
          <span>Built with React</span>
        </div>
      </div>
    </footer>
  );
}
