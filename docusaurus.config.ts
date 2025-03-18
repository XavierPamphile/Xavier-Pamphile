import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Xavier Pamphile',
  tagline: 'Développeur Web & Passionné de Technologie',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://xavierpamphile.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'XavierPamphile', // Usually your GitHub org/user name.
  projectName: 'personal-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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

  // Add structured data for better SEO
  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Xavier Pamphile',
        url: 'https://xavierpamphile.com',
        sameAs: ['https://github.com/XavierPamphile', 'https://linkedin.com/in/xavier-pamphile'],
        jobTitle: 'Developer',
        worksFor: {
          '@type': 'Organization',
          name: 'Your Company Name',
        },
      }),
    },
  ],

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/XavierPamphile/personal-website/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-XXXXXXXXXX', // Replace with your Google Analytics tracking ID
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 4, // the max number of images generated between min and max (inclusive)
        disableInDev: false, // By default, the plugin is inactive in development
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    metadata: [
      { name: 'keywords', content: 'portfolio, développeur, site personnel, blog' },
      {
        name: 'description',
        content:
          'Site personnel et portfolio présentant mes projets, expériences et articles de blog',
      },
      { name: 'author', content: 'Xavier Pamphile' },
      { name: 'og:type', content: 'website' },
      { name: 'og:title', content: 'Xavier Pamphile - Site Personnel' },
      {
        name: 'og:description',
        content:
          'Site personnel et portfolio présentant mes projets, expériences et articles de blog',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Xavier Pamphile - Site Personnel' },
      {
        name: 'twitter:description',
        content:
          'Site personnel et portfolio présentant mes projets, expériences et articles de blog',
      },
    ],
    navbar: {
      title: 'Xavier Pamphile',
      logo: {
        alt: 'Logo du Site',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          label: 'À propos',
          position: 'left',
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
        { to: '/blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/XavierPamphile',
          label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub profile',
        },
        {
          href: 'https://linkedin.com/in/xavier-pamphile',
          label: 'LinkedIn',
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
            {
              label: 'Mentions Légales',
              to: '/legal',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Xavier Pamphile. Tous droits réservés.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
