module.exports = {
    images: {
      domains: ['fakestoreapi.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 's3-alpha-sig.figma.com',
          pathname: '/img/**',
        },
      ],
    },
  };
  