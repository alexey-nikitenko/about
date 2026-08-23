# AspeedSoftware — aspeedsoftware.top

Personal/portfolio static site: DIY robotics projects (RoboArm, RoboRover), TTML-to-Audio, and a blog.

## Stack

Plain HTML/CSS/JS. No framework, no build step. Styling via Tailwind CDN, icons via Lucide.

## Structure

- `*.html` — one file per page (index, project pages, blog)
- `blog-posts.json` — single source of truth for blog posts; rendered client-side by `blog.html` / `blog-post.html`
- `images/`, `videos/`, `data/` — assets and downloadable PDFs referenced by pages
- `rss.xml` / `sitemap.xml` — feeds (regenerate after adding posts)

## Adding a blog post

Add an entry to `blog-posts.json` (follow the existing field shape), reference its image from `images/`, then regenerate `rss.xml` and `sitemap.xml` so dates/URLs stay current.

## Deploy

Push to `main`. GitHub Actions (`.github/workflows/deploy.yml`) publishes the repo root to GitHub Pages via the `gh-pages` branch. Custom domain: `aspeedsoftware.top` (see CNAME).
