/** @type {import('next').NextConfig} */
const {TASK_URL} = process.env;
//import {useRouter} from 'next/router';

//const router = useRouter();
//console.log(router.query)
console.log('TASK URL: ', TASK_URL)
module.exports = {
 // reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/task',
        destination: `${TASK_URL}/task`,
      },
      {
        source: '/task/:path*',
        destination: `${TASK_URL}/task/:path*`,
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

// Component library - deployable on bit
// check to directly use ui components
// should be tailwind driven 
// theme - shell app 