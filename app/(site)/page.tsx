import FeaturedProperty from '@/components/Home/FeaturedProperty'
import Hero from '@/components/Home/Hero'
import Services from '@/components/Home/Services'
import Testimonial from '@/components/Home/Testimonial'
import GetInTouch from '@/components/Home/GetInTouch'
import FAQ from '@/components/Home/FAQs'
import Properties from '@/components/Home/Properties'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProperty />
      <Properties />
      <Testimonial />
      <GetInTouch />
      <FAQ />
    </main>
  )
}
