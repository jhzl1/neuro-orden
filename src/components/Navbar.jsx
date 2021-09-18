import React, { useState } from "react";
import { Link } from "react-router-dom";
import navLogo from "./assets/img/neuro.png";
import { itemsMenu } from "./config/itemsMenu";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={navLogo} alt="Neuro Orden" className="nav-logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {itemsMenu.map((item) => (
            <li className="nav-item" key={item.key}>
              <Link
                to={item.path}
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <a
            href="https://instagram.com/neuroorden"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-links"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/neuro.orden"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-links"
          >
            <i class="fab fa-facebook-square"></i>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
