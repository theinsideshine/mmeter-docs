// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  mmeterSidebar: [
    {
      type: 'category',
      label: 'Empezar',
      items: [
        { type: 'doc', id: 'empezar/intro', label: 'Introducción' },
        { type: 'doc', id: 'empezar/puesta-en-marcha', label: 'Puesta en marcha' },
        { type: 'doc', id: 'empezar/uso-diario', label: 'Uso diario' },
      ],
    },
    {
      type: 'category',
      label: 'Uso de Mmeter',
      items: [
        { type: 'doc', id: 'uso-meter/configuracion-basica', label: 'Configuración básica' },
        { type: 'doc', id: 'uso-meter/errores', label: 'Errores' },
      ],
    },
    {
      type: 'category',
      label: 'Configuración avanzada',
      items: [
        { type: 'doc', id: 'config-avanzada/index', label: 'Acceso a la configuración' },
        { type: 'doc', id: 'config-avanzada/configuracion-equipo', label: 'Configuración del equipo' },
        { type: 'doc', id: 'config-avanzada/calibracion', label: 'Calibración de sensores' },

        // Logs
        { type: 'doc', id: 'config-avanzada/logs', label: 'Logs (registro interno)' },

        // 📧 NUEVO – archivo de fantasía
        { type: 'doc', id: 'config-avanzada/envio-mail', label: 'Envío de mails' },
      ],
    },
    {
      type: 'category',
      label: 'Ayuda',
      items: [
        { type: 'doc', id: 'ayuda/troubleshooting', label: 'Solución de problemas' },
      ],
    },
  ],
};

export default sidebars;
