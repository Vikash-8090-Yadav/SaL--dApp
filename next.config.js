/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  
  images :{
    unoptimized: true,
    domains :["ipfs.infura.io","sal-dapp.infura-ipfs.io"]
  }
};

module.exports = nextConfig
