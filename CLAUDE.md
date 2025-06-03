# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

leaderboarded.com is a Jekyll-based static website for Leaderboarded - an online leaderboard maker service. The site is hosted on GitHub Pages and deploys automatically when changes are pushed to the main branch.

The static website is a replacement for a product that no longer exists.

## Essential Commands

```bash
# Install dependencies (run once after cloning)
bundle install

# Run local development server
bundle exec jekyll serve

# Build static site for production
bundle exec jekyll build
```

The development server runs at `http://localhost:4000`

## Architecture and Structure

### Jekyll Collections System
- **_blog/**: Blog posts (output at /blog/:name)
- **_faq/**: FAQ articles (output at /faq/:name)
- **_layouts/**: Page templates (default.html, post.html, faq.html)
- **_includes/**: Reusable components (header.html, footer.html, cta-section.html)

### Content Organization
- Main pages are Markdown files at root level (index.md, templates.md, etc.)
- Each collection has its own layout defined in _config.yml defaults
- Generated site is output to _site/ directory (gitignored)

### Styling System
- **styles.css**: Main site styles
- **templates.css**: Page-specific styles for templates page
- CSS Grid used for features and metrics sections

### Key Configuration
- **_config.yml**: Contains site metadata, collection definitions, analytics IDs, and company variables
- **CNAME**: Custom domain configuration for GitHub Pages
- Analytics integration: Fathom (ATRSWXIE) and Ahrefs tracking

### Deployment
- Automatic deployment via GitHub Pages on push to main branch
- No build commands needed for deployment - GitHub Pages handles Jekyll build
- Custom domain: leaderboarded.com

## Development Notes

- Jekyll uses Liquid templating language
- SEO optimization via jekyll-seo-tag plugin
- Automatic sitemap generation via jekyll-sitemap plugin
- Favicon and Apple touch icons included
- Company information centralized in _config.yml for easy updates