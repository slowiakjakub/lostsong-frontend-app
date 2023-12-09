import React from "react";
import { NavLink } from 'react-router-dom'; // NavLink will be used for active styling
import './NavigationBar.css'; // Importing the CSS file for styling

function NavigationBar() {
  return (
    <nav className="navigation-bar">
      <div className="nav-container">
        <NavLink exact className="nav-link" activeClassName="nav-link-active" to="/home">Pobierz</NavLink>
        <NavLink className="nav-link" activeClassName="nav-link-active" to="/features">Funkcjonalności</NavLink>
        <NavLink className="nav-link" activeClassName="nav-link-active" to="/about">O projekcie</NavLink>
        {/* Add other NavLink components for additional navigation items here */}
      </div>
    </nav>
  );
}

export default NavigationBar;
