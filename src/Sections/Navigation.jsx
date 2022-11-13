import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../Style/nav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

export default function Navbar() {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header>
      <h3>AC</h3>
      <nav ref={navRef}>
        <a href="/#">About</a>
        <a href="/#">Experience</a>
        <a href="/#">Projects</a>
        <a href="/#">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}
