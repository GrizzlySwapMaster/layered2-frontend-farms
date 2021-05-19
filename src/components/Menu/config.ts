import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Layered 2 Farms (V2)',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Layered 2 Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Referral',
    icon: 'GroupsIcon',
    href: '/referral',
  },
  {
    label: 'Layered Farming',
    icon: 'IfoIcon',
    items: [
      {
        label: 'Layer 1',
        href: 'https://layer.grizzlyswap.com',
      },
      {
        label: 'Layer 2',
        href: 'https://layer2.grizzlyswap.com'
      },
    ],
  },
  {
    label: 'Grizzly Home (GRZ)',
    icon: 'InfoIcon',
    href: 'https://grizzlyswap.com'
  },
  
  {
    label: 'Automatic Emission Reduction',
    icon: 'InfoIcon',
    href: '/'
  },
  {
    label: 'Anti Whale Feature',
    icon: 'InfoIcon',
    href: '/'
  },

  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://grizzlyswap.medium.com/',
      },
      {
        label: 'Blog',
        href: 'https://grizzlyswap.gitbook.io/grizzly-swap/'
      },
    ],
  },

]

export default config
