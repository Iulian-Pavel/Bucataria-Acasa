import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./recipes.css";
import amatricana from "./images/amatriciana.jpg";
import ravioli from "./images/ravioli.jpg";
import { Link } from "react-router-dom";

const Recipes = () => {
  return (
    <>
      <Navbar />
      <section className="recipes">
        <div className="recipe-wrapper">
          <div className="recipe-image">
            <img src={amatricana} alt="" />
          </div>
          <div className="recipe-text">
            <h1>Pasta Amatriciana</h1>
            <br />
            <p>
              Acest tip de mâncare a reușit pe data de 16 martie 2020 să fie
              recunoscută oficial ca specialitate tradițională al Uniunii
              Europene.Așadar este normal ca o rețetă atât de veche și populară
              să fie preluat numeroasele variante despre care se discută și în
              ziua de azi.Astăzi o să vă prezentăm varianta noastră, deci este
              la decizia voastră dacă aceasta varianta va fi pe placul vostru.
            </p>
          </div>
          <div className="recipe-button">
            <button className="recipe-btn">
            <Link
                to="amatriciana"
                style={{ textDecoration: "none", color: "rgb(215, 0, 64)" }}
              >
                Citeste Reteta <span> &#8594;</span>
              </Link>
            </button>
          </div>
        </div>
        <br />
        <div className="recipe-wrapper">
          <div className="recipe-image">
            <img src={ravioli} alt="" />
          </div>
          <div className="recipe-text">
            <h1>Ravioli cu sos de roșii și busuioc</h1>
            <br />
            <p>
              Raviolii cu sos de roșii și busuioc sunt o rețetă perfectă pentru
              a reuni toată familia la masă.În această rețetă raviolii cu
              carne,cu ricotta și spanac sau cu oricare altă umplutură se
              combină perfect cu acest simplu sos care îi are ca protagoniști
              busuiocul și sosul de roșii,două îngrediente simbol al bucătăriei
              italiene.Ce mai așteptați?Suflecați-vă mânicile și răsfățați-vă
              familia cu această rețetă.
            </p>
          </div>
          <div className="recipe-button">
            <button className="recipe-btn">
              <Link
                to="ravioli"
                style={{ textDecoration: "none", color: "rgb(215, 0, 64)" }}
              >
                Citeste Reteta <span> &#8594;</span>
              </Link>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recipes;
