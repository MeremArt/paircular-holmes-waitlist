import { useState } from "react";
import { links } from "../data";
import Navbar from "./components/Navbar";
import "./App.css";
import AutoPlaySlide from "./components/Carousel/AutoPlaySlide";
function App() {
  return (
    <main>
      <Navbar links={links} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      <section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="texth2">
                  Elevate Your Living <br /> Experience, Expand <br /> Your
                  Horizons
                </h2>

                <p>
                  We believe that your home should be an extension of your
                  unique personality, a place where every corner tells a story,
                  and each room resonates with your individuality. At Paircular
                  Homes, we meticulously craft experiences, connecting you with
                  spaces that not only fulfill your housing needs but also
                  elevate your entire living experience.
                </p>
                <br />
                <button className="waitlist2"> Join Waitlist</button>
              </div>
              <div className="col-lg-6">
                <div>
                  <img
                    className="imgpair"
                    src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1702583181/piarhomes_trjmzh.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <section className="carousel_section">
          <br />
          <div className="container">
            <div className="row">
              <h1 className="findpair">
                Find Harmony in Every Home
                <br /> Discover Paircular Living{" "}
                <img src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1702586284/DIS_w2zlsl.svg" />
              </h1>
            </div>
          </div>
          <br />
          <AutoPlaySlide />
          <br />
        </section>
      </section>
    </main>
  );
}

export default App;
