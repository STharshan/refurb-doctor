import React from 'react'
import FullResprayGallery from '../components/FullRespray/FullResprayGallery'
import FullResprayOverview from '../components/FullRespray/FullResprayReview'
import HighlightsSection from '../components/FullRespray/HighlightsSection'

const FullRespray = () => {
  return (
    <div>
      <FullResprayGallery />
      <FullResprayOverview />
      <HighlightsSection />
    </div>
  )
}

export default FullRespray
