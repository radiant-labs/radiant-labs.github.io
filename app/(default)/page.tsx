export const metadata = {
  title: 'RadiantKit',
  description: 'Build Graphic Apps 10x Faster!',
  'google-site-verification': 'xy_j_QQqJqkGPz_WT10w76FR3HBixyk5PdP0QERa3ks' 
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features />
      <FeaturesBlocks />
      <Testimonials /> */}
      <Newsletter />
    </>
  )
}
