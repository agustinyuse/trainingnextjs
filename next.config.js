/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "rickandmortyapi.com",
      },
    ],
  },
  env: {
    OKTA_CLIENT_ID: "0oaawq8q95XRP9mGH5d7",
    OKTA_CLIENT_SECRET:
      "GgvpuNsma7qo3dUoYezsqcqpiBNX0Zb9_4Bb6-4MDqh3ZCPt07LQElIYKSveIKEW",
    OKTA_ISSUER: "https://dev-35231736.okta.com",
    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "e61aa996b916f6415a61e8ca1249e44a",
  },
};

module.exports = nextConfig;
