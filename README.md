# ReGc Digital Services Website

A professional website for REGC DIGITAL Services built with Hugo and TailwindCSS.

## Features

- Modern, responsive design inspired by Stripe and GitHub
- Dark/light mode toggle
- Optimized for performance and SEO
- Built with Hugo static site generator and TailwindCSS

## Development

### Prerequisites

- Hugo Extended (v0.141.0+)
- Node.js (v14+) and npm

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/regconline/regcdigi.git
   cd regcdigi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   hugo server -D
   ```

4. View the site at http://localhost:1313/regcdigi/

### Building for Production

To build the site for production:

```bash
hugo --minify
```

The built site will be in the `public` directory.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## License

Copyright © 2025 REGC DIGITAL Services. All rights reserved.