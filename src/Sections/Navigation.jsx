import React from "react";
import { Link } from "react-scroll";
import "../Style/nav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import { pageRoutes } from "../Routes/routes.js";

const Navbar = () => {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const routes = React.useMemo(() => {
    return pageRoutes.map((route) => (
      <Link to={route.path} spy={true} smooth={true} offset={0} duration={500}>
        {route.title}
      </Link>
    ));
  }, []);

  return (
    <header className="nav-bar">
      <nav href={navRef}>
        {routes}
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
};
export default Navbar;
