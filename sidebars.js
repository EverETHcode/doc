// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
  mainSidebar: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.svg#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-black.svg#light-mode-only"  alt="WalletConnect Logo"></div>WalletConnect<span>Docs<span></a>',
      defaultStyle: true
    },
    {
      type: 'category',
      label: 'Introduction',
      className: 'menu_outer_list',
      collapsible: false,
      items: ['readme', 'EverETH']
    },
    {
      type: 'category',
      label: 'Products',
      className: 'menu_outer_list',
      collapsible: false,
      items: ['Reflect', 'Stake', 'Marketplace', 'Yield']
    },
  ]
}
