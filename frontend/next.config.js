module.exports = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://food-ordering-portal-tjph.onrender.com/:path*',
          },
        ]
      },
  };