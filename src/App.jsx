import React from 'react'
import Navbar from './compontent/Navbar'
import FeaturedCategories from './compontent/FeaturedCategories'
import  BookRecommendations from './compontent/BookRecommendations'
import Footer from './compontent/Footer'
import ImageSlider from './compontent/ImageSlider'
const App = () => {
  return (
    <div className='bg-gray-50 '>
      <Navbar/>
      <ImageSlider/>
      <FeaturedCategories/>
      < BookRecommendations/>
      <Footer/>
    </div>
  )
}

export default App
