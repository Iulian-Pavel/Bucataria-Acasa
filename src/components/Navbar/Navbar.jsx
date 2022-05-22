import React, { useState } from "react";
import "./navbar.css";
import burger_icon from "./icons/burger_icon.svg";
import close_burger from "./icons/close-hamburger.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="logo">Bucataria Acasa</div>
        <div className="burger-icon" onClick={() => setOpen(!open)}>
          <img src={open ? close_burger : burger_icon} width="40" />
        </div>
      </nav>
      <div className={open ? "list-items responsive" : "list-items"}>
        <li>
          <Link to="/">Acasa</Link>
        </li>
        <li>
          <Link to="/recipes">Retete</Link>
        </li>
      </div>
    </>
  );
}

export default Navbar;
