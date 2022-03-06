import React from 'react'
import Navbar from '../Navbar/Navbar'
import Slider from '../Slider/Slider'
import SliderData from '../Slider/SliderData'

function Home() {
  return (
    <>
        <Navbar />
        <Slider slides={SliderData}/>
    </>
  )
}

export default Home