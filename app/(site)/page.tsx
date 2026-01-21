import FeaturedProperty from '@/components/Home/FeaturedProperty'
import Hero from '@/components/Home/Hero'
import Services from '@/components/Home/Services'
import Testimonial from '@/components/Home/Testimonial'
import GetInTouch from '@/components/Home/GetInTouch'
import FAQ from '@/components/Home/FAQs'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProperty />
      <Testimonial />
      <GetInTouch />
      <FAQ />
    </main>
  )
}
