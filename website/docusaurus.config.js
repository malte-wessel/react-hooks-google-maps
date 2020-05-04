module.exports = {
    title: 'Google Maps with React hooks',
    tagline: 'A Google Maps integration built with and for React hooks',
    url: 'https://malte-wessel.github.io.',
    baseUrl: '/react-hooks-google-maps/',
    favicon: 'img/favicon.ico',

    organizationName: 'malte-wessel',
    projectName: 'react-hooks-google-maps',

    themeConfig: {
        disableDarkMode: true,
        prism: {
            theme: require('prism-react-renderer/themes/oceanicNext'),
        },
        navbar: {
            title: 'react-hooks-google-maps',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
            },
            links: [
                {
                    to: 'docs/overview',
                    activeBasePath: 'docs',
                    label: 'Documentation',
                    position: 'left',
                },
                {
                    href:
                        'https://github.com/malte-wessel/react-hooks-google-maps',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Made with ❤️ in Düsseldorf by <a href="http://malte-wessel.de/" target="_blank">Malte Wessel</a>`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/malte-wessel/react-hooks-google-maps/edit/master/website/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
