# Cloudflare Security Headers — Setup Guide

GitHub Pages (which serves this site) **cannot set custom HTTP response
headers**. The old `_headers` file was Netlify-only syntax and did nothing.
The domain `aspeedsoftware.top` is fronted by **Cloudflare**, so that is where
real headers must be configured.

## One-time setup in the Cloudflare dashboard

For zone `aspeedsoftware.top`:

### 1. Response header Transform Rule (the important one)

Dashboard → Rules → **Transform Rules** → **Modify Response Header** → Create rule.

- Name: `security headers`
- Matching: *All incoming responses* (zone-wide)
- Action: **Set static headers**

| Header | Value |
|---|---|
| `Content-Security-Policy` | see below |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `geolocation=(), microphone=(), camera=()` |

CSP value (matches what the site actually loads today):

```
default-src 'self'; script-src 'self' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://www.google-analytics.com https://*.google-analytics.com; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com; frame-ancestors 'none'
```

Notes:
- `'unsafe-inline'` for styles is required: pages carry small inline `<style>`
  blocks and inline style attributes.
- Scripts are all same-origin now (`css/tailwind.css`, `js/vendor/*`) plus
  googletagmanager. If you ever drop GA, remove those two origins and the CSP
  becomes almost fully self-contained.
- `frame-ancestors 'none'` replaces `X-Frame-Options: DENY` (modern
  equivalent). You may set `X-Frame-Options: DENY` additionally for ancient
  browsers.

### 2. Verify

```bash
curl -sI https://aspeedsoftware.top/ | grep -iE 'content-security|x-content-type|referrer-policy|permissions-policy'
```

Then click through every page once (Home, RoboRover, RoboArm, Single-Hand,
TTML to Audio, Blog, one blog post, About) with DevTools console open — a too-
strict CSP shows violations there. The most likely breakages are Google Fonts
or gtag if an origin was mistyped.

## Caching (optional but recommended)

Second Transform Rule or Cache Rule:

- `Cache-Control: public, max-age=86400` for HTML
- `Cache-Control: public, max-age=31536000, immutable` for `/css/*`, `/js/*`,
  `/images/*`, `/videos/*` (these filenames change only on deploy)
