# How to Add a New Blog Post - Step by Step Guide

## Overview
Adding a new blog post is simple and takes about 5-10 minutes. No coding knowledge required!

---

## 📝 Step-by-Step Process

### Step 1: Prepare Your Content (5 minutes)

Before you start, have ready:
- ✅ Blog post title
- ✅ Content (written in Markdown or HTML)
- ✅ Short description (excerpt) - 150-200 characters
- ✅ 2-5 tags/categories
- ✅ (Optional) Featured image

**Example:**
- Title: "Building My First Robot Arm"
- Excerpt: "Learn how I built a 3D printed robot arm using Arduino and Python. Tips, mistakes, and lessons learned."
- Tags: Robotics, Arduino, DIY, Tutorial
- Image: images/robot-arm-build.jpg

---

### Step 2: Edit blog-posts.json (2 minutes)

1. **Open** `blog-posts.json` in your code editor
2. **Add** a new entry at the top of the array (after the opening `[`)
3. **Copy** this template:

```json
{
  "id": "my-post-url-slug",
  "title": "Your Blog Post Title",
  "date": "2025-10-15",
  "excerpt": "A short description of your post that appears in the listing.",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "readTime": 5,
  "image": "images/your-image.jpg",
  "contentType": "markdown",
  "content": "## Your Heading\n\nYour content here...\n\n### Subheading\n\nMore content..."
},
```

4. **Fill in** your details:
   - `id`: lowercase-with-hyphens (becomes the URL)
   - `title`: Your post title
   - `date`: Today's date in YYYY-MM-DD format
   - `excerpt`: Short description
   - `tags`: Array of tags
   - `readTime`: Estimated minutes to read (optional)
   - `image`: Path to image (optional)
   - `contentType`: "markdown" or "html"
   - `content`: Your blog post content

5. **Don't forget** the comma after the closing `}` if there are more posts below!

**Example:**
```json
[
  {
    "id": "building-robot-arm",
    "title": "Building My First Robot Arm",
    "date": "2025-10-15",
    "excerpt": "Learn how I built a 3D printed robot arm using Arduino and Python. Tips, mistakes, and lessons learned.",
    "tags": ["Robotics", "Arduino", "DIY", "Tutorial"],
    "readTime": 8,
    "image": "images/robot-arm-build.jpg",
    "contentType": "markdown",
    "content": "## Introduction\n\nBuilding a robot arm has been a dream of mine...\n\n## Materials Needed\n\n- Arduino Uno\n- 4x MG90S Servos\n- 3D Printer\n\n## Step 1: Design\n\nFirst, I designed the parts in Fusion 360..."
  },
  {
    "id": "welcome-to-my-blog",
    "title": "Welcome to My Blog",
    ...existing post...
  }
]
```

---

### Step 3: Write Content in Markdown (3 minutes)

Use these Markdown shortcuts:

```markdown
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point
- Another point

1. Numbered list
2. Second item

[Link text](https://example.com)

`inline code`

```
code block
```

> Blockquote

![Image alt text](images/photo.jpg)
```

**Tips:**
- Use `\n\n` for new paragraphs
- Use `\n` for line breaks
- Escape quotes with `\"`

---

### Step 4: Generate RSS Feed (1 minute)

1. **Open** `generate-rss.html` in your web browser
2. **Click** "Generate RSS Feed" button
3. **Download** the generated `rss.xml` file
4. **Replace** the old `rss.xml` in your website root

---

### Step 5: Generate Sitemap (1 minute)

1. **Open** `generate-sitemap.html` in your web browser
2. **Click** "Generate Sitemap" button
3. **Download** the generated `sitemap.xml` file
4. **Replace** the old `sitemap.xml` in your website root

---

### Step 6: Test Locally (1 minute)

1. **Open** `blog.html` in your web browser
2. **Check** that your new post appears at the top
3. **Click** on it to view the full post
4. **Verify** formatting looks good

---

### Step 7: Commit and Push to GitHub (2 minutes)

Using Git command line:
```bash
git add blog-posts.json rss.xml sitemap.xml
git commit -m "Add new blog post: Your Post Title"
git push origin main
```

Or using GitHub Desktop:
1. Open GitHub Desktop
2. Check the boxes next to changed files
3. Write commit message: "Add new blog post: Your Post Title"
4. Click "Commit to main"
5. Click "Push origin"

---

### Step 8: Verify Live (1 minute)

1. Wait 1-2 minutes for deployment
2. Visit your website
3. Check that the new post appears
4. Share the link!

---

## 🎯 Quick Reference

### Minimal Blog Post Template
```json
{
  "id": "post-url-slug",
  "title": "Post Title",
  "date": "2025-10-15",
  "excerpt": "Short description.",
  "tags": ["Tag1", "Tag2"],
  "contentType": "markdown",
  "content": "## Heading\n\nContent here..."
}
```

### Full Blog Post Template
```json
{
  "id": "post-url-slug",
  "title": "Post Title",
  "date": "2025-10-15",
  "excerpt": "Short description that appears in listings and search results.",
  "tags": ["Tag1", "Tag2", "Tag3"],
  "readTime": 5,
  "image": "images/featured-image.jpg",
  "contentType": "markdown",
  "content": "## Introduction\n\nYour content...\n\n### Subheading\n\nMore content..."
}
```

---

## 📋 Checklist

Before publishing, verify:
- [ ] `id` is unique and lowercase-with-hyphens
- [ ] `date` is in YYYY-MM-DD format
- [ ] `excerpt` is 150-200 characters
- [ ] `tags` are relevant
- [ ] `content` has proper `\n` for line breaks
- [ ] Commas are correct in JSON
- [ ] RSS feed regenerated
- [ ] Sitemap regenerated
- [ ] Tested locally
- [ ] Committed to GitHub
- [ ] Verified live

---

## 🚨 Common Mistakes

### 1. Missing Comma
```json
{
  "id": "post-1",
  "title": "Post 1"
}  ← Missing comma here!
{
  "id": "post-2",
  "title": "Post 2"
}
```

**Fix:** Add comma after first post's closing `}`

### 2. Forgot to Escape Quotes
```json
"content": "He said "hello""  ← Wrong!
"content": "He said \"hello\""  ← Correct!
```

### 3. Wrong Date Format
```json
"date": "10/15/2025"  ← Wrong!
"date": "2025-10-15"  ← Correct!
```

### 4. Forgot Line Breaks
```json
"content": "Paragraph 1 Paragraph 2"  ← Wrong!
"content": "Paragraph 1\n\nParagraph 2"  ← Correct!
```

---

## 💡 Pro Tips

### Tip 1: Use a JSON Validator
Before committing, paste your JSON into [jsonlint.com](https://jsonlint.com) to check for errors.

### Tip 2: Write Content Separately
Write your blog post in a Markdown editor first, then copy it into the JSON.

### Tip 3: Preview Markdown
Use [markdownlivepreview.com](https://markdownlivepreview.com) to preview your Markdown before adding it.

### Tip 4: Optimize Images
Compress images before uploading:
- Use [tinypng.com](https://tinypng.com) for PNG/JPG
- Keep images under 500KB
- Use descriptive filenames

### Tip 5: SEO-Friendly Excerpts
Write excerpts that:
- Include your main keyword
- Are compelling and clickable
- Are 150-200 characters (perfect for search results)

---

## 🎨 Content Ideas

### Tutorial Posts
```markdown
## What You'll Learn
## Prerequisites
## Step 1: Setup
## Step 2: Implementation
## Troubleshooting
## Conclusion
```

### Project Showcase
```markdown
## Overview
## The Problem
## My Solution
## How It Works
## Results
## Lessons Learned
```

### Technical Deep Dive
```markdown
## Introduction
## Background
## Technical Details
## Code Examples
## Performance
## Conclusion
```

---

## ⏱️ Time Estimate

| Task | Time |
|------|------|
| Prepare content | 5 min |
| Edit JSON | 2 min |
| Generate RSS | 1 min |
| Generate Sitemap | 1 min |
| Test locally | 1 min |
| Commit & push | 2 min |
| **Total** | **~12 min** |

---

## 🆘 Need Help?

### JSON Syntax Error?
- Check for missing commas
- Verify all quotes are escaped
- Use [jsonlint.com](https://jsonlint.com)

### Post Not Showing?
- Clear browser cache (Ctrl+F5)
- Check browser console for errors (F12)
- Verify JSON is valid

### Formatting Issues?
- Check `\n` for line breaks
- Verify Markdown syntax
- Test in Markdown preview tool

### Still Stuck?
- Check `README-BLOG.md` for more details
- Review existing posts in `blog-posts.json` as examples
- Open browser console (F12) to see error messages

---

## 📚 Additional Resources

- [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
- [JSON Validator](https://jsonlint.com)
- [Markdown Preview](https://markdownlivepreview.com)
- [Image Compression](https://tinypng.com)

---

**That's it! You're ready to start blogging!** 🎉

Remember: The first post takes 15 minutes. After that, you'll be adding posts in 5-10 minutes.
