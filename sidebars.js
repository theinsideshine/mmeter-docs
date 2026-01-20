// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mmeterSidebar: [
    {
      type: 'category',
      label: 'Empezar',
      items: [
        { type: 'doc', id: 'intro', label: 'Introducción' },
        { type: 'doc', id: 'primeros-pasos', label: 'Primeros pasos' },
        { type: 'doc', id: 'puesta-en-marcha', label: 'Puesta en marcha' },
      ],
    },
    {
      type: 'category',
      label: 'Uso de Mmeter',
      items: [
        { type: 'doc', id: 'uso-diario', label: 'Uso diario' },
      ],
    },
    {
      type: 'category',
      label: 'Ayuda',
      items: [
        { type: 'doc', id: 'troubleshooting', label: 'Solución de problemas' },
      ],
    },
  ],
};

export default sidebars;



