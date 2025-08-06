import React from 'react'
import CarPartGallery from '../components/CarPart/CarPartGallery'
import CarPartOverview from '../components/CarPart/CarPartReview'
import CarPartHighlightsSection from '../components/CarPart/CarPartHighlight'

const CarPart = () => {
  return (
    <div>
      <CarPartGallery />
      <CarPartOverview />
      <CarPartHighlightsSection />
    </div>
  )
}

export default CarPart
