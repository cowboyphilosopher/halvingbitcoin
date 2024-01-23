const vercel = process.env.NEXT_PUBLIC_DEVELOPMENT?.toLowerCase() === 'true';
const vercelDeployDappURL = 'https://dapp-hollywoodnft-club.vercel.app/';
const dappsiteURL = 'https://dapp.hollywoodnft.club/';
//const websiteURL = 'https://www.hollywoodnft.club/';
const websiteURL = 'https://www.halvingbitcoin.party/';

const siteMetadata = {
  enterUrl: `${websiteURL}bitcoin`,
  title: 'Hollywood NFT Club Marketplace & Exchange',
  author: 'Hollywood NFT Club ',
  headerTitle: 'Hollywood NFT Club',
  description: 'Hollywood NFT Marketplace Website',
  language: 'en-us',
  siteUrl: websiteURL,
  siteRepo: 'https://gitlab.com/hollywoodnftclub/hollywoodnftclublanding',
  dapp: "dapp.hollywoodNFT.club",
  buyNow: vercel ? `${vercelDeployDappURL}buy` : `${dappsiteURL}buy`,
  viewNFT: vercel ? `${vercelDeployDappURL}nft` :`${dappsiteURL}nft`,
  documentation:
    'https://gitlab.com/Crypteriat/Compose_DAO#compose-able-decentralized-autonomous-organization-dao-a-framework-and-fund-for-dao-creation',
  googleanalytics: 'G-90TK21M9C3',
  image: '/static/img/avatar.png',
  logo: '/static/img/logo.svg',
  btc: '/static/img/BTC.png',
  btcAddr: '3QfVhBcyCsi7gBvv9zVxvh8HnGfo1dEfUE',
  btcLink:
    'https://blockchain.com/btc/address/3QfVhBcyCsi7gBvv9zVxvh8HnGfo1dEfUE',
  eth: '/static/img/ETH.png',
  ethAddr: '0x6520a28adcd29C8E52007957160E5d2aEbF32a12',
  ethLink:
    'https://etherscan.io/address/0x6520a28adcd29C8E52007957160E5d2aEbF32a12',
  paypal: '/static/img/PayPalQR.png',
  paypalLink:
    'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=WTVXDGXPUYMF6',
  paypallogo: '/static/img/btc.jpg',
  socialBanner: '/static/img/twitter-card.png',
  email: 'support@hollywoodnft.club',
  github: 'https://github.com/ComposeDAO',
  gitlab: 'https://gitlab.com/hollywoodnftclub/',
  twitter: 'https://twitter.com/hollywoodnftclub',
  linkedin: 'https://www.linkedin.com/in/richard-neuckranz-b60991231',
  discord: 'https://discord.gg/dJqAY44u9E',
  locales: [{ en: 'English' }, { es: 'Español' }, {cht: ' 简化字'}],
};
export default siteMetadata;
