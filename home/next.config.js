/** @type {import('next').NextConfig} */
const {TASK_URL} = process.env;
import {useRouter} from 'next/router';

const router = useRouter();
console.log(router.query)
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
        destination: `${TASK_URL}/`,
      },
      {
        source: '/:id/task',
        destination: `${TASK_URL}/:id/task`,
      },
    ]
  },
}


//Menu - company1 / cmp2 / 
// on company -  link to task -  //Task Component - /:id

// Cookies
// JWT token 
// URl 

// Cookie from 1st to 2nd - Server side props

// try on local - local.env

// reverse proxy ngnix
