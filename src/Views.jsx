import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Recipes from "./Pages/Recipes/Recipes";
import Home from "./Pages/Home/Home";
import Ravioli from "./Pages/Ravioli/Ravioli";
import Amatriciana from "./Pages/Amatriciana/Amatriciana";

const Views = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={Home()}></Route>
        <Route path="/recipes" element={Recipes()}></Route>
        <Route path="/recipes/amatriciana" element={Amatriciana()}></Route>
        <Route path="/recipes/ravioli" element={Ravioli()}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Views;
