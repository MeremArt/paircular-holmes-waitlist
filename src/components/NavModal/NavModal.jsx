import React, { useEffect, useState } from "react";
import "./NavModal.css";

export default function Navmodal({ fire, setToggleMenu }) {
  const ApplyNowHandler = () => {
    setToggleMenu((prev) => !prev);
    fire();
  };

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delaying the visibility to ensure the transition effect works
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <main className={`Main_modal ${visible ? "show" : ""}`}>
      <div className="Modal_container">
        <ul className="Modal_list">
          <li>About us</li>
          <li>Join Our Community</li>
          <li>Volunteer</li>
          <li>Sign In</li>
          <li onClick={ApplyNowHandler}>Sign Up</li>
        </ul>
      </div>
    </main>
  );
}
