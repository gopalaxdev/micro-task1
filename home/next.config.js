/** @type {import('next').NextConfig} */
const {TASK_URL} = process.env;

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/task',
        destination: `${BLOG_URL}/task`,
      },
    ]
  },
}
