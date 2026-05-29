import React, { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="newsletter">
      <div className="newsletter__inner">
        <div className="newsletter__ornament">✦</div>
        <h2 className="newsletter__title">The Quarterly, Delivered</h2>
        <p className="newsletter__body">
          Every two weeks, a carefully chosen essay arrives in your inbox. No algorithm, no feed — only considered writing.
        </p>
        {submitted ? (
          <p className="newsletter__thanks">Thank you. We'll be in touch soon.</p>
        ) : (
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter__input"
              placeholder="your@address.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter__btn">Subscribe</button>
          </form>
        )}
        <p className="newsletter__fine">No tracking. Unsubscribe at any time.</p>
      </div>
    </section>
  );
}
