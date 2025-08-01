import React from 'react'
import Hero from '../components/Home/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import BrandScroller from '../components/Home/BrandScroller'
import Service from '../components/ServiceUs'
import Commitment from '../components/Home/Commitment'
import Testimonials from '../components/Home/Testimonials'
import ContactSection from '../components/Home/ContactSection'
import FindUsSection from '../components/Home/FindUsSection'

const Home = () => {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <BrandScroller />
      <Service />
      <Commitment />
      <Testimonials />
      <ContactSection />
      <FindUsSection />
    </div>
  )
}

export default Home
