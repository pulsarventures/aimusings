---
layout: post
title: "Sample Blog Post with Cross-Platform Publishing"
date: 2025-04-08 10:00:00 +0000
author: "Your Name"
description: "This is a sample blog post showing how to use our cross-platform publishing features"
excerpt: "Learn how to create blog posts that are optimized for multiple social media platforms while maintaining a single source of truth."
image: /assets/images/blog/2025-04-08-sample-blog-post/featured.jpg
categories: 
  - blog
tags: 
  - web-development
  - content-strategy
  - publishing
platforms:
  linkedin:
    title: "How to Create Content for Multiple Platforms Using Jekyll"
    description: "Learn our approach to content reuse across platforms while maintaining a single source of truth"
    image: /assets/images/blog/2025-04-08-sample-blog-post/linkedin.jpg
  twitter:
    title: "Content reuse across platforms with Jekyll"
    description: "One source, multiple channels - here's how we do it"
    image: /assets/images/blog/2025-04-08-sample-blog-post/twitter.jpg
linkedin_cta: "What content strategies are you using for cross-platform publishing? Share your thoughts in the comments!"
twitter_thread:
  - text: "We've built this system with markdown as the single source of truth - all formatting is standardized"
  - text: "Custom frontmatter allows platform-specific optimization while keeping content consistent"
  - text: "Asset naming convention ensures images and files stay organized by post"
twitter_main_text: "Created a cross-platform content publishing system using Jekyll that allows posting to multiple channels from a single source of truth."
twitter_cta: "Try this approach and let me know how it works for you!"
---

## Introduction

Creating content that works well across multiple platforms can be challenging. Each platform has its own formatting requirements, character limits, and image dimensions. This post demonstrates how we've solved this problem using Jekyll.

## The Challenge

When publishing content across platforms like LinkedIn, Twitter, and others, you typically need to:

1. Reformat content for each platform
2. Resize images to match platform requirements  
3. Adjust titles and descriptions for platform-specific constraints
4. Manage content updates across multiple places

## Our Solution

We've created a Jekyll-based system that allows:

- Single source of truth in Markdown format
- Platform-specific frontmatter for optimization
- Consistent asset management
- Preview capabilities for each platform

### Frontmatter Structure

```yaml
platforms:
  linkedin:
    title: "Platform-specific title"
    description: "Platform-specific description"
    image: /path/to/linkedin-optimized-image.jpg
  twitter:
    title: "Platform-specific title"
    description: "Platform-specific description"
    image: /path/to/twitter-optimized-image.jpg
```

### Asset Management

All post assets are stored in a folder structure that matches the post slug:

```
/assets/images/blog/YYYY-MM-DD-post-slug/
  - featured.jpg
  - linkedin.jpg
  - twitter.jpg
  - other-image.jpg
```

## How It Works

When you create a post:

1. Write your content in Markdown format
2. Add platform-specific metadata in the frontmatter
3. Store images in the post-specific folder
4. Preview how content will look on each platform
5. Publish to your Jekyll site
6. Use the platform-specific URLs to copy content to each platform

## Benefits

- **Efficiency**: Update once, reflect everywhere
- **Consistency**: Maintain brand voice across platforms
- **Optimization**: Tailor content details for each platform
- **Organization**: Keep all related assets together

## Getting Started

To create your first cross-platform post:

1. Create a new markdown file in `_content/blog/`
2. Add the frontmatter with platform-specific details
3. Write your content in Markdown
4. Add images to the corresponding folder
5. Preview and publish

## Conclusion

With this approach, you can create content once and publish it everywhere, while still optimizing for each platform's unique requirements. 

Try it out and let us know how it works for your publishing workflow!