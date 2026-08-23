# Security Documentation

## Overview
This blog system is designed with security in mind, using static files and client-side rendering. However, it's important to understand the security model and best practices.

## Security Model

### ✅ Built-in Security Features

1. **Static Site Architecture**
   - No server-side code execution
   - No database vulnerabilities
   - No user authentication to compromise
   - No file upload functionality

2. **XSS Protection**
   - All user-facing content is HTML-escaped
   - URL parameters are properly encoded
   - Meta tags use `setAttribute()` for safe attribute setting
   - Content is sanitized before rendering

3. **Access Control**
   - Only GitHub repository owners can modify content
   - GitHub's 2FA and authentication protect your content
   - Version control tracks all changes

## Security Best Practices

### 1. Protect Your GitHub Account
- ✅ Enable Two-Factor Authentication (2FA)
- ✅ Use strong, unique passwords
- ✅ Review repository access regularly
- ✅ Use SSH keys instead of passwords

### 2. Content Security Policy (Recommended)

Add a `_headers` file (for Netlify) or `.htaccess` (for Apache) to enable CSP:

**For Netlify (_headers file):**
```
/*
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://unpkg.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

**For Apache (.htaccess file):**
```apache
<IfModule mod_headers.c>
    Header set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com https://unpkg.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'"
    Header set X-Frame-Options "DENY"
    Header set X-Content-Type-Options "nosniff"
    Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

### 3. Regular Updates
- Keep CDN dependencies up to date
- Review `blog-posts.json` for suspicious content
- Monitor GitHub security alerts

### 4. Content Validation
Before adding blog posts, ensure:
- No `<script>` tags in content (unless intentional)
- Image URLs are from trusted sources
- Links point to legitimate websites
- Markdown doesn't contain malicious HTML

## Threat Model

### Low Risk Threats (Mitigated)
✅ **SQL Injection** - No database
✅ **Server-Side Code Execution** - No server code
✅ **File Upload Attacks** - No upload functionality
✅ **Session Hijacking** - No sessions
✅ **CSRF** - No state-changing operations

### Medium Risk Threats (Partially Mitigated)
⚠️ **XSS (Cross-Site Scripting)**
- **Mitigation**: All content is HTML-escaped
- **Residual Risk**: Markdown parser could have vulnerabilities
- **Action**: Keep marked.js updated

⚠️ **CDN Compromise**
- **Mitigation**: Use reputable CDNs (Tailwind, unpkg)
- **Residual Risk**: If CDN is compromised, malicious code could load
- **Action**: Consider self-hosting libraries for production

### High Risk Threats (Requires Action)
🔴 **GitHub Account Compromise**
- **Impact**: Attacker could modify blog content
- **Mitigation**: Enable 2FA, use strong passwords, review access logs
- **Action**: Enable GitHub's security features

## Security Checklist

When deploying:
- [ ] GitHub 2FA enabled
- [ ] Strong repository password
- [ ] Content Security Policy configured (if using Netlify/Apache)
- [ ] HTTPS enabled on hosting
- [ ] Regular content reviews
- [ ] Monitor GitHub security alerts

## Reporting Security Issues

If you discover a security vulnerability:
1. **Do not** open a public GitHub issue
2. Email: donaspeed@gmail.com
3. Include details about the vulnerability
4. Allow time for a fix before public disclosure

## Security Updates

### Version 1.0 (Current)
- ✅ HTML escaping for all user content
- ✅ URL encoding for parameters
- ✅ Safe attribute setting for meta tags
- ✅ No eval() or dangerous functions

## Additional Resources

- [OWASP XSS Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)
- [GitHub Security Best Practices](https://docs.github.com/en/code-security)
- [Content Security Policy Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)

## Conclusion

This blog system is secure for personal/portfolio use when following best practices. The main security requirement is protecting your GitHub account, as that's the only way to modify content.

For high-security applications (e.g., handling sensitive data), consider a more robust CMS with server-side validation and authentication.
