import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';

// Development configuration
const config: Config = {
  title: 'Xavier Pamphile',
  tagline: 'Professional Portfolio',
  favicon: 'img/favicon.ico',

  url: 'http://localhost',
  baseUrl: '/',

  organizationName: 'XavierPamphile',
  projectName: 'Xavier-Pamphile',

  onBrokenLinks: 'warn', // More lenient in development
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
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Development-specific theme settings
    metadata: [
      { name: 'keywords', content: 'portfolio, professional, developer' },
      { name: 'author', content: 'Xavier Pamphile' },
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Xavier Pamphile',
      hideOnScroll: false,
      style: 'primary',
      items: [
        // Left side
        {
          to: '/',
          label: 'Home',
          position: 'left',
          activeBaseRegex: '^/$',
        },
        {
          to: '/experience',
          label: 'Experience',
          position: 'left',
        },
        {
          to: '/contact',
          label: 'Contact',
          position: 'left',
        },
        // Right side
        {
          to: '/blog',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://github.com/XavierPamphile',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub profile',
        },
        {
          href: 'https://linkedin.com/in/xavier-pamphile',
          position: 'right',
          className: 'header-linkedin-link',
          'aria-label': 'LinkedIn profile',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Experience',
              to: '/experience',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'Contact',
              to: '/contact',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/XavierPamphile',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/xavier-pamphile',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'RSS',
              to: '/blog/rss.xml',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Xavier Pamphile. Built with Docusaurus.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
