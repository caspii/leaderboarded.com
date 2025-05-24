# leaderboarded.com

Landing page for Leaderboarded - The Online Leaderboard Maker. This site is built with Jekyll and hosted on GitHub Pages.

## Local Development

### Prerequisites

- Ruby (2.7.x or higher)
- Bundler gem (`gem install bundler`)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/leaderboarded.com.git
cd leaderboarded.com
```

2. Install dependencies:
```bash
bundle install
```

### Running Locally

Start the Jekyll development server:
```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`

### Build for Production

To build the static site:
```bash
bundle exec jekyll build
```

The built site will be in the `_site` directory.

## Project Structure

```
leaderboarded.com/
├── _config.yml          # Jekyll configuration
├── Gemfile             # Ruby dependencies
├── _layouts/           # Page templates
│   ├── default.html    # Main layout
│   ├── post.html       # Blog post layout
│   └── faq.html        # FAQ page layout
├── _includes/          # Reusable components
│   ├── header.html     # Site header
│   ├── footer.html     # Site footer
│   └── cta-section.html # Call-to-action component
├── _blog/              # Blog posts collection
├── _faq/               # FAQ articles collection
├── index.md            # Homepage
├── templates.md        # Templates page
├── sales-leaderboard.md # Sales page
├── financial-services-leaderboard.md
├── gamification-leaderboard.md
├── styles.css          # Main stylesheet
├── templates.css       # Templates page styles
└── scripts.js          # JavaScript functionality
```

## Deployment

This site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The custom domain is configured via the CNAME file.

## Making Changes

1. **Content Updates**: Edit the `.md` files directly
2. **Style Changes**: Modify `styles.css` or page-specific CSS
3. **Layout Changes**: Edit files in `_layouts/` or `_includes/`
4. **New Blog Posts**: Add `.md` files to `_blog/`
5. **New FAQ Articles**: Add `.md` files to `_faq/`

## Technologies

- Jekyll (Static Site Generator)
- GitHub Pages (Hosting)
- Markdown (Content)
- Liquid (Templating)
- CSS (Styling)
- JavaScript (Interactivity)
