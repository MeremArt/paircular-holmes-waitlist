import React, { useState, useRef } from "react";
import logo from "../assets/pair.svg";
import "./Navbar.css";
const Navbar = ({ links, fire }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const linksContainerRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const toggleHandler = () => {
    setToggleMenu((prev) => !prev);
  };

  return (
    <nav className="Beans_navbody">
      <div className="Beans_nav-center">
        <div className="Beans_nav-header">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div ref={linksContainerRef} onClick={toggleHandler}>
          <button className="waitlist">Join Waitlist</button>
        </div>
        {/* {toggleMenu && <Navmodal setToggleMenu={setToggleMenu} fire={fire} />} */}
      </div>
    </nav>
  );
};

export default Navbar;
