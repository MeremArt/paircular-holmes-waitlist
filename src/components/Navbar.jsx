import React, { useState, useRef } from "react";
import logo from "../assets/pair.svg";
import "./Navbar.css";

const Navbar = ({ links, fire }) => {
  const [showLinks, setShowLinks] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const linksContainerRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const toggleHandler = () => {
    setToggleMenu((prev) => !prev);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <nav className="Beans_navbody">
      <div className="Beans_nav-center">
        <div className="Beans_nav-header">
          <img src={logo} className="logo" alt="logo" />
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="hamburger" onClick={toggleHandler}>
          <div className={`bar ${toggleMenu ? "toggle" : ""}`}></div>
          <div className={`bar ${toggleMenu ? "toggle" : ""}`}></div>
          <div className={`bar ${toggleMenu ? "toggle" : ""}`}></div>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="sign" ref={linksContainerRef} onClick={toggleHandler}>
          <button className="Sign_in">Sign In</button>
          <button className="waitlist">Sign Up</button>
        </div>

        {/* Modal Form */}
        {/* <ModalForm isOpen={modalIsOpen} onRequestClose={closeModal} /> */}

        {/* Navigation Links for Mobile */}
        {toggleMenu && (
          <div className="mobile-links">
            <button className="Sign_in">Sign In</button>
            <button className="waitlist">Sign Up</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
