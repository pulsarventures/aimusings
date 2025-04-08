# Content Publishing Guide

This guide explains how to create and manage content within our Jekyll-based publishing system. All content is written in Markdown format and organized to enable cross-platform publishing.

## Content Types

We have three primary content types:

1. **Blog Posts**: Long-form content with detailed exploration of topics
2. **Notes**: Shorter, more focused content on specific concepts
3. **Projects**: Showcase of products, services, or initiatives

## Directory Structure

```
_content/
├── blog/             # Long-form blog posts
│   └── YYYY-MM-DD-title.md
├── notes/            # Short-form notes/thoughts
│   └── YYYY-MM-DD-title.md
└── projects/         # Project showcases
    └── project-name.md
```

## Asset Management

All images and downloadable files should be stored in a directory structure that mirrors the content:

```
assets/
├── images/
│   ├── blog/
│   │   └── YYYY-MM-DD-title/
│   │       ├── featured.jpg       # Main post image
│   │       ├── linkedin.jpg       # LinkedIn optimized (1200x628)
│   │       ├── twitter.jpg        # Twitter optimized (1200x675)
│   │       └── other-images.jpg   # Additional post images
│   └── projects/
│       └── project-name/
│           ├── featured.jpg       # Main project image
│           ├── thumb.jpg          # Thumbnail for listings
│           └── other-images.jpg   # Additional project images
└── downloads/
    └── YYYY-MM-DD-title/          # Downloads related to specific content
        └── filename.pdf
```

## Front Matter Guide

### Basic Front Matter

All content should include these basic front matter fields:

```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD HH:MM:SS +0000
author: "Your Name"
description: "SEO-friendly description under 160 characters"
excerpt: "A compelling excerpt shown in post listings"
categories: [blog|notes|projects]
tags: [tag1, tag2, tag3]
---
```

### Cross-Platform Publishing

For content that will be shared across platforms, add platform-specific front matter:

```yaml
platforms:
  linkedin:
    title: "LinkedIn-optimized title (100 char max)"
    description: "LinkedIn-optimized description (500 char max)"
    image: /assets/images/blog/YYYY-MM-DD-title/linkedin.jpg
  twitter:
    title: "Twitter-optimized title (140 char max)"
    description: "Twitter-optimized description (280 char max)"
    image: /assets/images/blog/YYYY-MM-DD-title/twitter.jpg
  facebook:
    title: "Facebook-optimized title"
    description: "Facebook-optimized description"
    image: /assets/images/blog/YYYY-MM-DD-title/facebook.jpg
linkedin_cta: "Call to action for LinkedIn readers"
twitter_main_text: "Main tweet text (under 280 chars)"
twitter_thread:
  - text: "First thread tweet"
  - text: "Second thread tweet"
    image: /assets/images/blog/YYYY-MM-DD-title/thread-image.jpg
  - text: "Third thread tweet"
twitter_cta: "Call to action for Twitter readers"
```

## Image Guidelines

Follow these guidelines for creating post images:

- **Featured images**: 1200×630px, 16:9 aspect ratio
- **LinkedIn images**: 1200×628px
- **Twitter images**: 1200×675px
- **Facebook images**: 1200×630px
- **Thumbnails**: 400×300px

All images should be optimized for web (JPEG or WebP for photos, PNG for graphics with transparency).

## Tags and Categories

Use categories for broad content classification:
- `blog` - Long-form content
- `notes` - Short-form content
- `projects` - Project showcases

Use tags for specific topic classification. Reference the predefined tags in `_data/tags.yml` for consistency.

## Cross-Platform Publishing Workflow

1. Create content in Markdown within the appropriate `_content` directory
2. Add platform-specific metadata in the front matter
3. Prepare optimized images for each platform
4. Preview how your content will look on each platform (using `/platform-preview`)
5. Publish your content to the Jekyll site
6. Use the platform-specific URLs to share on each platform:
   - Original post: `https://yourdomain.com/[category]/YYYY/MM/DD/title/`
   - LinkedIn: `https://yourdomain.com/[category]/YYYY/MM/DD/title/platforms/linkedin/`
   - Twitter: `https://yourdomain.com/[category]/YYYY/MM/DD/title/platforms/twitter/`

## Content Style Guidelines

- Write in a clear, direct style
- Use proper Markdown formatting
- Break up content with subheadings (## and ###)
- Use bullet points and numbered lists for easy scanning
- Include relevant links to other content
- Optimize for SEO with appropriate keywords
- End with a clear call to action

## Testing Your Content

Before publishing, verify:
- All Markdown syntax renders correctly
- Images display properly across different screen sizes
- Internal and external links work
- Platform-specific versions display as expected