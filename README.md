# Personal Professional Website

This is my professional portfolio website built using [Docusaurus](https://docusaurus.io/), a modern static website generator. The site showcases my professional experiences, skills, and blog posts.

## Features

- 🌍 Multilingual support (French/English)
- 🌓 Dark/Light mode
- 📝 Blog section
- 💼 Professional experience showcase
- 📊 Skills and qualifications
- 📬 Contact form integration
- 🔗 Links to GitHub and LinkedIn profiles

## Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (v20.12.2 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-website
```

2. Install dependencies:
```bash
npm install
```

## Local Development

To start the development server:
```bash
npm start
```

This will start a local development server and open a browser window. Most changes are reflected live without having to restart the server.

## Build

To create a production build:
```bash
npm run build
```

This generates static content into the `build` directory that can be served using any static hosting service.

## Deployment

The site is configured to deploy to GitHub Pages. To deploy:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

## Project Structure

- `/src/pages/` - Main pages (Home, Experience, Contact)
- `/blog/` - Blog posts
- `/docs/` - Documentation and additional content
- `/static/` - Static files (images, files)
- `/src/css/` - Global styles
- `/i18n/` - Translations

## Contributing

This is a personal website, but if you notice any issues or have suggestions, feel free to open an issue.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
