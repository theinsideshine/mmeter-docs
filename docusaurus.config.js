// docusaurus.config.js
module.exports = {
  title: 'Guía del Usuario – Mmeter',
  tagline: 'Documentación y ayuda paso a paso',
  url: 'http://localhost:3000',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs', // o '/' si querés que la doc sea la raíz
          editUrl: undefined,
        },
        blog: false, // 👈 desactiva blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Mmeter',
      items: [
        { to: '/docs/intro', label: 'Guía', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} Mmeter`,
    },
  },
};
