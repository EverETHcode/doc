// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const lightCodeTheme = require('prism-react-renderer/themes/github')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WalletConnect Docs',
  tagline: 'WalletConnect is an open protocol to communicate securely between Dapps and Wallets.',
  url: 'https://docs.evereth.net/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'walletconnect',
  projectName: 'walletconnect-docs',
  staticDirectories: ['static'],
  scripts: [
    {
      src: 'https://plausible.io/js/plausible.js',
      defer: true,
      'data-domain': 'docs.evereth.net'
    }
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          breadcrumbs: true,
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl: 'https://github.com/WalletConnect/walletconnect-docs/blob/main/',
          remarkPlugins: [
            [
              require('@docusaurus/remark-plugin-npm2yarn'),
              {
                sync: true,
                converters: ['yarn', ['Bun', code => code.replace(/npm/g, 'bun')], 'pnpm']
              }
            ]
          ]
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      image: 'img/Docs-OG.png',
      metadata: [{ name: 'twitter:card', content: 'summary_large_image' }],
      navbar: {
        items: [
          {
            type: 'html',
            value:
              '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>'
          },
          {
            href: 'https://github.com/EverETHcode/',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository'
          }
        ]
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              /* {
                label: 'Web3Modal SDK',
                to: '/web3modal/about'
              },
              {
                label: 'Web3Wallet SDK',
                to: '/web3wallet/about'
              },
              {
                label: 'Web3Inbox SDK',
                to: '/web3inbox/about'
              } */
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/EverETHcode/'
              },
              {
                label: 'Telegram',
                href: 'https://t.me/EverETHofficial/'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/EverETHofficial/'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://medium.com/walletconnect'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/EverETHcode/'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EverETH.`
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false
      },
      prism: {
        darkTheme: darkCodeTheme,
        theme: lightCodeTheme,
        additionalLanguages: ['swift', 'kotlin', 'dart', 'csharp'],
        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: 'theme-code-block-highlighted-delete',
            line: 'highlight-delete',
            block: { start: 'highlight-delete-start', end: 'highlight-delete-end' }
          },
          {
            className: 'theme-code-block-highlighted-add',
            line: 'highlight-add',
            block: { start: 'highlight-add-start', end: 'highlight-add-end' }
          }
        ]
      },
      algolia: {
        appId: 'KEO8ND6AUT',
        apiKey: '5921626237dc9040afc258af25d4e77d',
        indexName: 'walletconnect',
        contextualSearch: true
      },
      announcementBar: {
        id: 'support_us',
        content:
          '🎉 Web3Modal v3 is out. <a rel="noopener noreferrer" href="/web3modal/about">Learn more</a>. 🎉',
        backgroundColor: '#3182ce',
        textColor: '#fff',
        isCloseable: true
      }
    }
}

module.exports = config
