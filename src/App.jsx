import { useState } from "react";
import { links } from "../data";
import Navbar from "./components/Navbar";
import ModalForm from "./components/Modal/ModalForm";
import "./App.css";
import AutoPlaySlide from "./components/Carousel/AutoPlaySlide";
import Options from "./components/Option/Options";
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const formUrl = () => {
    const url = "https://whatsapp.com/channel/0029VaBmFr1EVccR3VwEIa3H";
    // Open the URL in a new tab
    window.open(url, "_blank");
  };
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

                <button className="waitlist2" onClick={openModal}>
                  Early Access
                </button>
                <ModalForm isOpen={modalIsOpen} onRequestClose={closeModal} />
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div>
                <img
                  className="imgpair2"
                  src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1702587330/pair2_dxwo4t.png"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h2 className="text2">
                Your Ideal Home Awaits Find it with{" "}
                <span style={{ color: "#E0E0CA" }}> Paircular Homes.</span>
              </h2>
              <p className="textp ">
                At Paircular Homes, our mission transcends the conventional. We
                aspire to be your premier destination for comprehensive home
                solutions on a global scale. With a commitment to excellence, we
                aim to redefine the way you perceive and engage with the concept
                of home. Whether it's finding the perfect abode, securing an
                ideal roommate, or transforming your living spaces.
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <section>
        <div className="piar4">
          <div className="container">
            <center>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />

              <Options />
            </center>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <section>
        <div className="container">
          <div className="Community">
            <br />
            <br />
            <br />
            <center className="container">
              <h2>Ready to transform your home experience?</h2>

              <br />
              <p className="container">
                Stay in the loop with Paircular Homes! Be the first to receive
                the latest updates, exclusive offers, and special promotions.
                Join our community and elevate your living with Paircular Homes.
              </p>
              <br id="HIDE" />

              <button className="waitlist" onClick={formUrl}>
                Join Our Community
              </button>
            </center>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
      <section>
        <div className="Footer">
          <section className="footer">
            <br />
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-5">
                  <h2>Email address</h2>
                  <p>paircularholmes@gmail.com</p>
                </div>
                <div className="col-lg-4 col-2">
                  <center>
                    <svg
                      className="hotit"
                      width="71"
                      height="83"
                      viewBox="0 0 71 83"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33.7037 12.1268L11.1618 46.4033H14.8021V47.3827V64.1711C14.8021 69.4315 17.8824 70.0005 19.4225 69.6274H31.1835C34.4318 70.0751 34.2171 73.8245 33.7037 75.6433L8.78159 82.4986C-0.291175 83.282 -0.599201 69.2077 0.380882 62.0726L4.72125 42.0663C5.72933 35.3509 7.84818 29.848 8.78159 27.936L21.1026 0.934523C26.4791 0.48683 23.3428 9.5153 21.1026 14.0855L15.7822 22.6196C18.6291 19.122 25.415 11.0076 29.7834 6.53067C34.1517 2.05374 34.2171 8.39605 33.7037 12.1268Z"
                        fill="#F5F5DC"
                      />
                      <path
                        d="M54.9855 47.3827V66.5495C54.5375 68.5641 52.932 69.4409 52.1853 69.6274H38.8841C34.6278 71.1943 35.5238 74.7572 36.5039 76.3428C40.7043 77.4154 51.4292 80.1202 60.726 82.3586C70.0228 84.5971 70.6668 69.8606 69.8268 62.2125L63.1062 31.9932L49.525 1.91385C46.0527 -2.45115 45.7447 3.73261 46.0247 7.37011L48.5449 14.0855L54.4254 22.6196L40.8443 7.37011C36.0279 1.32626 35.4772 7.83646 35.8039 11.847L46.8648 27.936L57.9257 44.7245C59.7179 46.6272 58.6725 46.9163 57.9257 46.823H54.9855V47.3827Z"
                        fill="#F5F5DC"
                      />
                      <rect
                        x="38.4336"
                        y="34.8199"
                        width="9.88295"
                        height="10.432"
                        rx="4.94148"
                        fill="#F5F5DC"
                      />
                      <rect
                        x="38.4336"
                        y="47.9971"
                        width="9.88295"
                        height="10.432"
                        rx="4.94148"
                        fill="#F5F5DC"
                      />
                      <rect
                        x="23.0605"
                        y="34.8199"
                        width="9.88295"
                        height="10.432"
                        rx="4.94148"
                        fill="#F5F5DC"
                      />
                      <rect
                        x="23.0605"
                        y="47.9971"
                        width="9.88295"
                        height="10.432"
                        rx="4.94148"
                        fill="#F5F5DC"
                      />
                    </svg>
                  </center>
                </div>
                <div className="col-lg-4 col-5">
                  <h1>
                    ©Paircularholmes.com 2023 <br />
                    <br />{" "}
                    <img
                      width={20}
                      height={20}
                      src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1702642071/TwitterX_c2hqnm.svg"
                    />
                  </h1>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default App;
