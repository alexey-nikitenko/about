# Blog System - Quick Reference Card

## 🚀 Add New Post (10 Minutes)

### 1. Edit `blog-posts.json`
```json
{
  "id": "post-url-slug",
  "title": "Post Title",
  "date": "2025-10-15",
  "excerpt": "Short description.",
  "tags": ["Tag1", "Tag2"],
  "readTime": 5,
  "image": "images/photo.jpg",
  "contentType": "markdown",
  "content": "## Heading\n\nContent..."
}
```

### 2. Generate RSS
Open `generate-rss.html` → Generate → Download

### 3. Generate Sitemap
Open `generate-sitemap.html` → Generate → Download

### 4. Push to GitHub
```bash
git add .
git commit -m "Add new post"
git push
```

---

## 📝 Markdown Cheat Sheet

```markdown
## Heading 2
### Heading 3

**Bold** *Italic*

- Bullet list
1. Numbered list

[Link](url)
![Image](path)

`code`

> Quote
```

---

## 🔧 Common Tasks

### Search Posts
Type in search box on blog.html

### View Post
blog-post.html?id=post-slug

### RSS Feed
yoursite.com/rss.xml

### Sitemap
yoursite.com/sitemap.xml

---

## 🐛 Troubleshooting

### JSON Error?
→ Check commas, quotes, brackets
→ Use jsonlint.com

### Post Not Showing?
→ Clear cache (Ctrl+F5)
→ Check browser console (F12)

### Formatting Wrong?
→ Check \n for line breaks
→ Verify Markdown syntax

---

## 📁 File Structure

```
├── blog.html              (listing page)
├── blog-post.html         (post template)
├── blog-posts.json        (YOUR CONTENT)
├── generate-rss.html      (RSS generator)
├── generate-sitemap.html  (sitemap generator)
├── rss.xml               (generated)
└── sitemap.xml           (generated)
```

---

## 🔒 Security

✅ Enable GitHub 2FA
✅ Use strong password
✅ Content is HTML-escaped
✅ No server vulnerabilities

---

## 📚 Documentation

- **HOW-TO-ADD-BLOG-POST.md** - Detailed guide
- **BLOG-POST-WORKFLOW.md** - Visual workflow
- **README-BLOG.md** - Full documentation
- **SECURITY.md** - Security details
- **This file** - Quick reference

---

## ⏱️ Time Estimates

| Task | Time |
|------|------|
| Write content | 5 min |
| Edit JSON | 2 min |
| Generate RSS/Sitemap | 2 min |
| Push to GitHub | 1 min |
| **Total** | **10 min** |

---

## 💡 Pro Tips

1. Write content in Markdown editor first
2. Use jsonlint.com to validate
3. Optimize images (<500KB)
4. SEO-friendly excerpts (150-200 chars)
5. Test locally before pushing

---

## 🆘 Quick Help

**Need help?** Check these in order:
1. HOW-TO-ADD-BLOG-POST.md
2. Browser console (F12)
3. Existing posts as examples
4. jsonlint.com for JSON errors

---

## 📊 Comparison

| Feature | Your Blog | WordPress |
|---------|-----------|-----------|
| Speed | ⚡ Fast | 🐌 Slow |
| Security | 🔒 High | ⚠️ Medium |
| Cost | 💰 Free | 💰💰 Paid |
| Maintenance | ✅ None | ⚠️ Updates |
| Complexity | 😊 Simple | 😰 Complex |

---

**Print this page and keep it handy!** 📄
