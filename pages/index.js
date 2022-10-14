import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import CanvasHero from '../components/canvas/CanvasHero'

export default function Home() {
  return (
    <div>

      <Head>
        <title>Bespoke Programming</title>
        <meta name="description" content="Bespoke Programming | Portfolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      {/* ---------------------- Canvas ---------------------- */}
    <CanvasHero/>

      {/* ---------------------- Hero ---------------------- */}
      <section id='hero'>
        <div>
          <h1>This is a dummy text.</h1>
        </div>
      </section>

    </div>
  )
}