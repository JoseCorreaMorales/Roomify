import React, { useState } from "react";
import "./Header.css"; // Asumiendo que tienes un archivo de estilos
import iconLogo from '../assets/icono-cara.svg';
import iconFlecha from '../assets/flecha-abajo.svg';



const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__icon">
      <img src={iconLogo} alt="Logo" className="icon" />
      </div>
      <div className="header__title">
        <h1>Roomify</h1>
      </div>
      <div className="header__search">
        <input type="text" placeholder="Explorar..." />
      </div>
      <div className="header__menu">
        <button onClick={toggleMenu} className="menu-btn">
        Secciones                <img src={iconFlecha} alt="Logo" className="icon" />


            <div className="header__icon_2">           

            </div>
        </button>
        {isMenuOpen && (
          <ul className="dropdown-menu">
            <li><a href="#section1">Section 1</a></li>
            <li><a href="#section2">Section 2</a></li>
            <li><a href="#section3">Section 3</a></li>
            <li><a href="#section4">Section 4</a></li>
            <li><a href="#section5">Section 5</a></li>
          </ul>
        )}
      </div>
      <div className="header__button">
        <button className="header-btn">Unete</button>
      </div>
    </header>
  );
};

export default Header;