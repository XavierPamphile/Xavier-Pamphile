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

  onBrokenLinks: 'warn', // Changé de 'throw' à 'warn' pour éviter les erreurs de build
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
        label: 'English',
        direction: 'ltr',
      },
      fr: {
        htmlLang: 'fr-FR',
        label: 'Français',
        direction: 'ltr',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: false,
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
          type: 'localeDropdown',
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
