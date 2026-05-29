# The Quarterly — Elegant React Blog

A production-quality blog/content site built with React. Features an editorial aesthetic inspired by literary journals — refined typography, elegant layout, and smooth interactions.

## ✨ Features

- **Featured hero post** with full-bleed image layout
- **Category filtering** — filter posts by section (Essay, Culture, Philosophy, etc.)
- **Responsive grid** — 3-column → 2-column → 1-column
- **Newsletter signup** section
- **Sticky header** with scroll-aware styling
- **Smooth animations** on page load and card hover
- **Mobile-friendly** hamburger menu

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Install & Run

```bash
# Clone the repo
git clone https://github.com/your-username/elegant-blog.git
cd elegant-blog

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

### Build for Production

```bash
npm run build
```

Builds the app to the `build/` folder, ready to deploy.

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js / Header.css
│   ├── FeaturedPost.js / FeaturedPost.css
│   ├── CategoryBar.js / CategoryBar.css
│   ├── PostCard.js / PostCard.css
│   ├── Newsletter.js / Newsletter.css
│   └── Footer.js / Footer.css
├── data/
│   └── posts.js          ← Blog post data (replace with your API/CMS)
├── App.js / App.css
└── index.js / index.css
```

## 🎨 Customisation

**Posts**: Edit `src/data/posts.js` to add your own articles, or wire it up to a CMS (Contentful, Sanity, etc.).

**Colours**: All design tokens live in `src/index.css` as CSS variables:
```css
--cream, --ink, --gold, --rule ...
```

**Fonts**: Loaded from Google Fonts in `public/index.html`. Swap the `@import` for any typeface you like.

## 🌐 Deployment

Works with any static host:

- **Vercel**: `vercel --prod`
- **Netlify**: drag-and-drop the `build/` folder
- **GitHub Pages**: use `gh-pages` package

## 📝 License

MIT — free to use and modify.
