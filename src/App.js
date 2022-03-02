import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import SliderData from './components/Slider/SliderData';

function App() {
  return (
    <>
      <Navbar />
      <Slider slides={SliderData}/>
    </>
  );
}

export default App;
