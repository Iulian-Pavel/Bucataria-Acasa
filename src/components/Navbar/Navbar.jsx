import React, { useState } from "react";
import './navbar.css';
import burger_icon from './burger_icon.svg';

function Navbar() {

    const [open, setOpen] = useState(false);

  return (
      <>
        <nav>
            <div className="logo">
                Bucataria Acasa
            </div>
            <ul className="list-items">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Section</a></li>
            </ul>
            <div className="burger-icon">
                <img src={burger_icon} width="40"/>
            </div>
        </nav>
      </>
  )
}

export default Navbar