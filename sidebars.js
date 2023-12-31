// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

module.exports = {
  mainSidebar: [
    {
      type: 'html',
      value:
        '<a class="navbar__brand" href="/"><div class="navbar__logo"><img src="/img/walletconnect-logo-white.png#dark-mode-only"  alt="WalletConnect Logo"><img src="/img/walletconnect-logo-white.png#light-mode-only"  alt="EverETH Logo"></div>EverETH<span>Docs<span></a>',
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
      items: ['products/Reflect', 'products/Stake', 'products/Marketplace', 'products/Yield']
    },
    {
      type: 'category',
      label: 'EETH',
      className: 'menu_outer_list',
      collapsible: false,
      items: ['EETH/Token', 'EETH/Presale', 'EETH/Loyalty Rewards']
    },
  ]
}
