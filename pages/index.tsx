import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
            <title>
                Zephyr Solution
            </title>
            <meta name="description" content="IT solution company, customised web apps, software solution" />
        </Head>
        <Navbar />
        <h1 className="text-3xl mt-5 font-bold content-center justify-center">Welcome to Zephyr Solution</h1>
        <button className="mt-5 px-5 py-5 rounded bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          Explore
        </button>
    </div>
    
  )
}
