import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
    <p>This is our homepage</p>
    <div>
      <Link href="/task">Task</Link>
    </div>
    <Image
      src="/static/nextjs.png"
      alt="Next.js logo"
      width={200}
      height={160}
    />
    </div>
  )
}

export default Home
