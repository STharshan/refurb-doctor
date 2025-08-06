import React from 'react'
import VandalGallery from '../components/Vandal/VandalGallery'
import VandalOverview from '../components/Vandal/VandalReview'
import VandalHighlightsSection from '../components/Vandal/VandalHighlight'

const Vandal = () => {
  return (
    <div>
      <VandalGallery />
      <VandalOverview />
      <VandalHighlightsSection />
    </div>
  )
}

export default Vandal
