import React from "react";

const Hero = () => {
  return (
    <section className="hero">
        <div className="left">
          <h1 className="dosis">
            Optimise your ISP/WISP Workflows and Reduce Operational Costs by Up
            to 40%
          </h1>
          <p className="poppins">
            Streamline subscriber management, network monitoring, automate
            billing, and enhance field operations with ISPFULL's comprehensive
            solution.
          </p>
          <button
            onClick={() => {}}
            id="hero-button"
            className=" fw3 rounded orange-bg white-txt poppins "
          >
            Calculate your savings
          </button>
        </div>
        <div className="right">
          <img src="img/hero123.png" alt="three images stacked"/>
        </div>
    </section>
  );
};

export default Hero;
