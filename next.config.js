/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{domains:["www.clarin.com","encrypted-tbn0.gstatic.com","okdiario.com"]}
}

module.exports = nextConfig
