import React from "react";
import "./About.css";
import bmw_two_removebg from "../Components/Assests/bmw_two_removebg.png";
import Footer from "../Components/Footer/Footer";

const About = () => {
  return (
    <>
      {/* ABOUT INTRO */}
      <section className="about">
        <div className="about-container">
          <div className="about-text">
            <h2>About Moh-Autos</h2>
            <p>
              Moh-Autos is a trusted name in Nigeria’s automotive market,
              delivering quality vehicles at competitive prices for over three
              years. We specialize in both locally used and foreign cars,
              ensuring accessibility, affordability, and value.
            </p>

            <p>
              What sets us apart is our customer-first approach, deep industry
              experience, and commitment to quality. Every vehicle is carefully
              inspected to meet high standards of performance and reliability.
            </p>

            <p>
              Whether you’re searching for a dependable daily driver or a premium
              upgrade, Moh-Autos guarantees a smooth, transparent, and rewarding
              car-buying experience.
            </p>

            <strong>Drive with confidence. Drive with Moh-Autos.</strong>
          </div>

          <div className="about-image">
            <img src={bmw_two_removebg} alt="BMW vehicle" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why">
        <h2>Why Choose Us?</h2>

        <div className="why-grid">
          <div className="why-card">
            <h4>Trusted Quality</h4>
            <p>
              Every vehicle is thoroughly inspected and quality-certified to
              ensure long-term reliability.
            </p>
          </div>

          <div className="why-card">
            <h4>Affordable & Flexible</h4>
            <p>
              Competitive pricing with flexible payment and financing options
              tailored to your budget.
            </p>
          </div>

          <div className="why-card">
            <h4>Wide Vehicle Selection</h4>
            <p>
              From compact cars to luxury SUVs, we offer a wide range to suit
              every lifestyle.
            </p>
          </div>

          <div className="why-card">
            <h4>Customer-First Service</h4>
            <p>
              Our team supports you from test drive to ownership with honesty
              and professionalism.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
