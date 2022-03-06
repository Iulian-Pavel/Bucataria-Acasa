import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recipes from './Pages/Recipes/Recipes';
import Home from './Pages/Home/Home';

const Views = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={ Home() }></Route>
      <Route path='/recipes' element={ Recipes() }></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Views