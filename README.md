# Pulsar Ventures Website

This is the official website for Pulsar Ventures, a venture studio that combines advisory, consulting, and product development experience to accelerate business growth through strategic innovation and capital deployment.

## Technology Stack

- **Static Site Generator**: Jekyll
- **Theme**: Minima
- **Hosting**: GitHub Pages
- **Additional Plugins**: jekyll-feed, jekyll-seo-tag, jekyll-sitemap

## Development

### Prerequisites

- Ruby
- Bundler gem

### Local Setup

```bash
# Install dependencies
bundle install

# Start the local development server
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000/website/`

## Content Structure

- `_posts/`: Blog posts
- `_content/`: Additional content collections
  - `blog/`: Extended blog content
  - `notes/`: Short-form notes and insights
  - `projects/`: Project showcases
- `pages/`: Main site pages
- `assets/`: Static assets including images, CSS, and JavaScript

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The live site is available at https://pulsarventures.github.io/website/

## License

This project is licensed under the MIT License - see the LICENSE file for details.