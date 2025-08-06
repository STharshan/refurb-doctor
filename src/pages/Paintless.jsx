import React from 'react'
import PaintlessGallery from '../components/Paintless/PaintlessGallery'
import PaintlessOverview from '../components/Paintless/PaintlessReview'
import PaintlessHighlightsSection from '../components/Paintless/PaintlessHighlight'

const Paintless = () => {
  return (
    <div>
      <PaintlessGallery />
      <PaintlessOverview />
      <PaintlessHighlightsSection />
    </div>
  )
}

export default Paintless
