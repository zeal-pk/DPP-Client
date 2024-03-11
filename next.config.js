/** @type {import('next').NextConfig} */

const nextConfig = {
<<<<<<< HEAD
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
=======
   
>>>>>>> refs/remotes/origin/main
};

module.exports = nextConfig;
