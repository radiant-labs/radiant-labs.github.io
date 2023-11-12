export const metadata = {
  title: 'RadiantKit | Github',
  description: 'Build Graphic Apps 10x Faster!',
  'google-site-verification': 'xy_j_QQqJqkGPz_WT10w76FR3HBixyk5PdP0QERa3ks' 
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>RadiantKit | Github</title>
        <meta name='description'>Build Graphic Apps 10x Faster!</meta>
        <meta name="google-site-verification" content="xy_j_QQqJqkGPz_WT10w76FR3HBixyk5PdP0QERa3ks" />
      </Head>
      <Hero />
      {/* <Features />
      <FeaturesBlocks />
      <Testimonials /> */}
      <Newsletter />
    </>
  )
}
