# Education Ghor — Website

A simple and easy-to-navigate education website rebuilt in React. It covers university admission and job preparation with courses, books, e-books, online exams, and articles.

## Tech Stack

- **React 19** (Vite)
- **React Router v7** — page navigation
- **Plain CSS** — no CSS framework, everything in `src/index.css`
- **Hind Siliguri / Poppins** fonts (Google Fonts)

## Features

- **Home** — hero, stats, course categories, popular courses, books, e-books, blog, testimonials (working slider)
- **Courses** — all course batches with prices, discounts, and tags
- **Exam** — free online model tests
- **Books & E-Book** — product grids with stock status and prices
- **Blog** — latest articles
- **Apps / About / Contact / Login** — supporting pages with a working contact & login form (demo only)
- Fully responsive (mobile hamburger menu, single-column layouts on small screens)
- Floating chat widget on every page

## Getting Started

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Project Structure

```
src/
├── data/site.js            # All content (courses, books, blogs, testimonials...)
├── components/
│   ├── Navbar.jsx          # Top navigation
│   ├── Footer.jsx          # Footer with links & contact info
│   ├── ChatWidget.jsx      # Floating chat button
│   ├── PageHero.jsx        # Page header for inner pages
│   ├── Icons.jsx           # Inline SVG icons
│   ├── home/               # Hero, Stats, Categories, Testimonials
│   └── cards/              # Course, Book, Ebook, Blog cards
├── pages/                  # Home, Courses, Exam, Books, EBook, Blog, Apps, About, Contact, Login
├── App.jsx                 # Router setup
└── index.css               # All styles
```

## Easy Customization

- **Text & data:** edit `src/data/site.js` — courses, prices, books, blogs, testimonials, and footer links are all defined there.
- **Images:** book covers and course thumbnails are currently CSS gradient placeholders with real titles. To use real images, add an `<img>` inside `.book-cover` or `.course-thumb` in `src/components/cards/`.
- **Colors:** change the CSS variables at the top of `src/index.css` (`--blue`, `--navy`, etc.).
