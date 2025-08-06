import React from 'react'
import AccidentGallery from '../components/AccidentRepair/AccidentGallery'
import AccidentOverview from '../components/AccidentRepair/AccidentReview'
import AccidentHighlightsSection from '../components/AccidentRepair/AccidentHighlight'

const AccidentRepair = () => {
  return (
    <div>
      <AccidentGallery />
      <AccidentOverview />
      <AccidentHighlightsSection />
    </div>
  )
}

export default AccidentRepair
