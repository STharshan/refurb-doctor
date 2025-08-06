import React from 'react'
import MachineGallery from '../components/Machine/MachineGallery'
import MachineOverview from '../components/Machine/MachineReview'
import MachineHighlightsSection from '../components/Machine/MachineHighlight'

const Machine = () => {
  return (
    <div>
      <MachineGallery />
      <MachineOverview />
      <MachineHighlightsSection />
    </div>
  )
}

export default Machine
