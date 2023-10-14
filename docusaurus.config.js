// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Quarky Skin Guidelines',
  tagline: 'Rules and tips for making Quarky skins to be approved in the Quarky Skin Store.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://design.quarky.skin',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'meower-holdings', // Usually your GitHub org/user name.
  projectName: 'design.quarky.skin', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/meower-holdings/design.quarky.skin/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Quarky Skin Guidelines',
        logo: {
          alt: 'Quarky logo',
          src: 'img/logo.svg',
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More Quarky',
            items: [
              {
                label: 'Quarky Skin Store',
                to: 'https://quarky.skin',
              },
              {
                label: 'Quarky Client',
                to: 'https://quarky.hakase.life',
              },
              {
                label: 'Quarky Blog',
                to: 'https://blog.hakase.life/tag/quarky',
              },
            ],
          },
          {
            title: 'GitHub repositories',
            items: [
              {
                label: 'Quarky Client',
                to: 'https://github.com/meower-holdings/quarky',
              },
              {
                label: 'Quarky Skin Store',
                to: 'https://github.com/meower-holdings/quarky-skin-store',
              },
              {
                label: 'Quarky Skin Guidelines',
                to: 'https://github.com/meower-holdings/design.quarky.skin',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                to: 'https://discord.gg/lit-devs-868937321402204220',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hakase. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
