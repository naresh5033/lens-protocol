/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { //next js to read the imgs from ipfs, for the regular imgs its just fine next can read
    domains: [
      'ipfs.infura.io',
      'statics-polygon-lens-staging.s3.eu-west-1.amazonaws.com',
      'lens.infura-ipfs.io',
      ""
    ],
  },
}

module.exports = nextConfig