// docusaurus.config.js
module.exports = {
  title: 'PRUEBA CONFIG OK',
  tagline: 'Documentación y ayuda paso a paso',
  url: 'http://localhost:3000',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'Mmeter',
      items: [{ to: '/docs/empezar/intro', label: 'Guía', position: 'left' }],
    },

    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} Mmeter <span style="margin-left:8px; opacity:0.7; font-size:0.85em;">· Web preliminar</span>`,
    },
  },
};

