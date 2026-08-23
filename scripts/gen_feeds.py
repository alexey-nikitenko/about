#!/usr/bin/env python3
"""Generate rss.xml and sitemap.xml from blog-posts.json.

Run manually (python3 scripts/gen_feeds.py) or automatically in CI
(see .github/workflows/deploy.yml). Deterministic output except for
lastBuildDate, which reflects generation time.
"""
import json
import os
import re
from datetime import datetime, timezone
from email.utils import format_datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE = "https://aspeedsoftware.top"

# ---------------------------------------------------------------- helpers
def load_posts():
    with open(os.path.join(ROOT, "blog-posts.json"), encoding="utf-8") as f:
        posts = json.load(f)
    return sorted(posts, key=lambda p: p["date"], reverse=True)


def fmt_date(iso):
    return format_datetime(datetime.fromisoformat(iso).replace(tzinfo=timezone.utc))


def esc(s):
    return (s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;"))


# ---------------------------------------------------------------- RSS
def gen_rss(posts):
    newest = datetime.now(timezone.utc)
    items = []
    for p in posts:
        url = f"{BASE}/blog-post.html?id={p['id']}"
        img = f'{BASE}/{p["image"]}'
        desc = (
            f'<img src="{img}" alt="{esc(p["title"])}" '
            f'style="max-width:100%;height:auto;"/><br/><br/>{esc(p["excerpt"])}'
        )
        cats = "".join(f"<category>{esc(t)}</category>" for t in p["tags"])
        items.append(
            f"""    <item>
      <title>{esc(p['title'])}</title>
      <link>{url}</link>
      <guid isPermaLink="true">{url}</guid>
      <pubDate>{fmt_date(p['date'])}</pubDate>
      <description><![CDATA[{desc}]]></description>
      {cats}
    </item>"""
        )
    return f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AspeedSoftware Blog</title>
    <link>{BASE}/blog.html</link>
    <description>Insights on software development, robotics, automation testing, and DIY projects by Aleksey Nikitenko</description>
    <language>en-us</language>
    <lastBuildDate>{format_datetime(newest)}</lastBuildDate>
    <atom:link href="{BASE}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>{BASE}/images/face.jpg</url>
      <title>AspeedSoftware Blog</title>
      <link>{BASE}/blog.html</link>
    </image>

{chr(10).join(items)}

  </channel>
</rss>
"""


# ---------------------------------------------------------------- Sitemap
PAGES = [
    ("index.html", "1.0", "weekly"),
    ("roborover.html", "0.9", "monthly"),
    ("roboarm.html", "0.9", "monthly"),
    ("roboarm-single.html", "0.9", "monthly"),
    ("ttml_to_audio.html", "0.9", "monthly"),
    ("blog.html", "0.8", "weekly"),
    ("about.html", "0.7", "monthly"),
]


def gen_sitemap(posts):
    newest_post = max(p["date"] for p in posts)
    urls = []
    for path, pri, freq in PAGES:
        lastmod = newest_post if path == "blog.html" else newest_post
        urls.append(
            f"""  <url>
    <loc>{BASE}/{path}</loc>
    <lastmod>{lastmod}</lastmod>
    <changefreq>{freq}</changefreq>
    <priority>{pri}</priority>
  </url>"""
        )
    urls.insert(0, f"""  <url>
    <loc>{BASE}/</loc>
    <lastmod>{newest_post}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>""")
    for p in posts:
        urls.append(
            f"""  <url>
    <loc>{BASE}/blog-post.html?id={p['id']}</loc>
    <lastmod>{p['date']}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>"""
        )
    return (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "\n".join(urls)
        + "\n</urlset>\n"
    )


if __name__ == "__main__":
    posts = load_posts()
    with open(os.path.join(ROOT, "rss.xml"), "w", encoding="utf-8") as f:
        f.write(gen_rss(posts))
    with open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8") as f:
        f.write(gen_sitemap(posts))
    print(f"rss.xml ({len(posts)} items), sitemap.xml ({len(PAGES) + 2 + len(posts)} urls) generated")
