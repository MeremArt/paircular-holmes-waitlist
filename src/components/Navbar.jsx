import React, { useState, useRef } from "react";
import logo from "../assets/pair.svg";
import Hamburger from "../assets/Hamburger1.svg";
import Close from "../assets/Close.svg";
import Navmodal from "./NavModal/NavModal";
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

        <div className="sign" ref={linksContainerRef} onClick={toggleHandler}>
          <img
            className="fix-log"
            src={!toggleMenu ? Hamburger : Close}
            alt="Close tab or hamburger"
          />
        </div>
        {toggleMenu && <Navmodal setToggleMenu={setToggleMenu} fire={fire} />}
      </div>
    </nav>
  );
};

export default Navbar;
