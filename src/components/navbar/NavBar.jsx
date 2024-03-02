import React from 'react'
import "./navBar.css"

const NavBar = () => {

  return (
    <div className="navbar">
      <div className="logo">Footalent</div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};





export default NavBar