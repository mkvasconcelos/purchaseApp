// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   publicRuntimeConfig: {
//     API_URL: process.env.API_URL,
//   },
// };

// module.exports = nextConfig;

require('dotenv').config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
};
