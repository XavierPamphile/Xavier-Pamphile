import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';

// Production configuration
const config: Config = {
  title: 'Xavier Pamphile',
  tagline: 'Professional Portfolio',
  favicon: 'img/favicon.ico',

  url: 'https://xavierpamphile.github.io',
  baseUrl: '/Xavier-Pamphile/',

  organizationName: 'XavierPamphile',
  projectName: 'Xavier-Pamphile',

  onBrokenLinks: 'throw', // Strict in production
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/XavierPamphile/Xavier-Pamphile/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/XavierPamphile/Xavier-Pamphile/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Production-specific theme settings
    metadata: [
      { name: 'keywords', content: 'portfolio, professional, developer' },
      { name: 'author', content: 'Xavier Pamphile' },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // Add other theme configurations
  } satisfies Preset.ThemeConfig,
};

export default config;
