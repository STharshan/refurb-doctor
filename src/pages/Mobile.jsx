import React from 'react'
import MobileGallery from '../components/Mobile/MobileGallery'
import MobileHighlightsSection from '../components/Mobile/MobileHighlight'
import MobileOverview from '../components/Mobile/MobileReview'

const Mobile = () => {
  return (
    <div>
      <MobileGallery />
      <MobileOverview />
      <MobileHighlightsSection />
    </div>
  )
}

export default Mobile
