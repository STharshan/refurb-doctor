import React from 'react'
import AboutUs from '../components/About/AboutHeader'
import WhyUs from '../components/About/WhyUs'
import WhyChooseUs from '../components/WhyChooseUs'
import Commitment from '../components/Home/Commitment'
import AboutCommitment from '../components/About/AboutCommitment'

const About = () => {
  return (
    <div>
      <AboutUs />
      <WhyUs />
      <WhyChooseUs />
      <AboutCommitment />
    </div>
  )
}

export default About