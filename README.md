# AspeedSoftware — aspeedsoftware.top

Personal/portfolio static site: DIY robotics projects (RoboArm, RoboRover), TTML-to-Audio, and a blog.

## Stack

Plain HTML/CSS/JS. No framework. Tailwind is prebuilt into `css/tailwind.css`
(regenerate with `npx tailwindcss@3.4.17` after adding new utility classes);
Lucide icons and marked are self-hosted under `js/vendor/`.

## Structure

- `*.html` — one file per page (index, project pages, blog)
- `blog-posts.json` — single source of truth for blog posts; rendered client-side by `blog.html` / `blog-post.html`
- `images/`, `videos/`, `data/` — assets and downloadable PDFs referenced by pages
- `rss.xml` / `sitemap.xml` — feeds (regenerate after adding posts)

## Adding a blog post

Add an entry to `blog-posts.json` (follow the existing field shape) and reference its image from `images/`.
Feeds regenerate automatically on deploy (`scripts/gen_feeds.py` runs in CI); to refresh locally, run `python3 scripts/gen_feeds.py`.

## Deploy

Push to `main`. GitHub Actions (`.github/workflows/deploy.yml`) generates the feeds and publishes the repo root to GitHub Pages via the `gh-pages` branch. Custom domain: `aspeedsoftware.top` (see CNAME). HTTP security headers live in Cloudflare — see CLOUDFLARE-HEADERS.md.
