import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';

// Development configuration
const config: Config = {
  title: 'Xavier Pamphile',
  tagline: 'Développeur Web & Passionné de Technologie',
  favicon: 'img/favicon.ico',

  url: 'http://localhost',
  baseUrl: '/',

  organizationName: 'XavierPamphile',
  projectName: 'Xavier-Pamphile',

  onBrokenLinks: 'warn', // More lenient in development
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
    localeConfigs: {
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
        docs: false, // Désactivation du plugin docs
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
      { name: 'keywords', content: 'portfolio, développeur, site personnel, blog' },
      { name: 'author', content: 'Xavier Pamphile' },
      { name: 'description', content: 'Site personnel et portfolio de Xavier Pamphile' },
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
          label: 'À propos',
          position: 'left',
          activeBaseRegex: '^/$',
        },
        {
          to: '/experience',
          label: 'Expérience',
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
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Navigation',
          items: [
            {
              label: 'À propos',
              to: '/',
            },
            {
              label: 'Expérience',
              to: '/experience',
            },
            {
              label: 'Contact',
              to: '/contact',
            },
          ],
        },
        {
          title: 'Réseaux Sociaux',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/xavier-pamphile',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/XavierPamphile',
            },
          ],
        },
        {
          title: 'Plus',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Xavier Pamphile. Tous droits réservés.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
