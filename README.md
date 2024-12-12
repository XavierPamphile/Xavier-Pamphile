# Xavier Pamphile - Personal Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Documentation

- [Technical Documentation](../documentation.md) - Technical details, architecture, and implementation
- [Project Backlog](../BACKLOG.md) - User stories, requirements, and task tracking

## Features

- 🌍 Multilingual support (English/French)
- 🌙 Dark mode support
- 📱 Responsive design
- 📝 Blog with RSS feed
- 📖 Documentation section
- 📬 Contact form integration
- 🔗 Social media integration

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm (comes with Node.js)
- Git

### Installation

```bash
git clone https://github.com/XavierPamphile/Xavier-Pamphile.git
cd Xavier-Pamphile
npm install
```

## Local Development

```bash
# Start the development server (default port: 3000)
npm start

# Start on a different port
npm start -- --port 4000

# Start with a specific locale
npm start -- --locale fr
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
# Production build
npm run build

# Development build
npm run build:dev

# Build with a specific locale
npm run build -- --locale fr
```

This command generates static content into the `build` directory that can be served using any static content hosting service.

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. Manual deployment can be done with:

```bash
npm run deploy
```

## Project Structure

```
my-website
├── blog/
│   ├── 2024-01-01-hello.md
│   └── authors.yml
├── docs/
│   ├── intro.md
│   └── tutorial-basics/
├── src/
│   ├── components/
│   ├── css/
│   └── pages/
├── static/
│   └── img/
├── docusaurus.config.dev.ts
├── docusaurus.config.prod.ts
├── package.json
├── sidebars.ts
└── tsconfig.json
```

## Internationalization

The site supports multiple languages. To work with translations:

```bash
# Write translations files
npm run write-translations

# Write translations files for a specific locale
npm run write-translations -- --locale fr

# Start the site in French
npm start -- --locale fr

# Build the site including all locales
npm run build
```

Available locales:

- English (default)
- French

## Customization

### Configuration

- Development: `docusaurus.config.dev.ts`
- Production: `docusaurus.config.prod.ts`

### Swizzling Components

To customize components, you can use the `swizzle` command:

```bash
# List available components
npm run swizzle

# Swizzle a specific component
npm run swizzle @docusaurus/theme-classic ComponentName
```

### TypeScript

The project is fully typed with TypeScript. Type checking is run as part of the build process.

```bash
# Run type checking
npm run typecheck
```

## Code Quality

- ESLint and Prettier for code formatting
- Pre-commit hooks with Husky
- TypeScript for type safety

```bash
# Run ESLint
npm run lint

# Run Prettier
npm run format
```

## Dependency Management

Dependencies are automatically updated by Dependabot:

- Weekly npm package updates
- Weekly GitHub Actions updates
- Grouped updates with auto-labeling
- Conservative update strategy (major React updates ignored)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Docusaurus](https://docusaurus.io/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
