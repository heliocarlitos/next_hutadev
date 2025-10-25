/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Ativa recursos experimentais, se necessário
  },
  images: {
    // Configurações de imagens, se usares domínios externos
    domains: ['via.placeholder.com'], 
  },
};

module.exports = nextConfig;
