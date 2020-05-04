module.exports = {
    title: 'Google Maps with React hooks',
    tagline: 'A Google Maps integration built with and for React hooks',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'malte-wessel', // Usually your GitHub org/user name.
    projectName: 'react-hooks-google-maps', // Usually your repo name.
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
            links: [
                // {
                //     title: 'Docs',
                //     items: [
                //         {
                //             label: 'Style Guide',
                //             to: 'docs/components-google-map',
                //         },
                //         {
                //             label: 'Second Doc',
                //             to: 'docs/doc2',
                //         },
                //     ],
                // },
                // {
                //     title: 'More',
                //     items: [
                //         {
                //             label: 'Blog',
                //             to: 'blog',
                //         },
                //         {
                //             label: 'GitHub',
                //             href:
                //                 'https://github.com/malte-wessel/react-hooks-google-maps',
                //         },
                //     ],
                // },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
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
