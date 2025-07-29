import React from "react";
import Solution from "../common/Solution";

const data = [
  {
    left:"Inefficient workflows slowing down operations",
    right:"Automates repetitive workflows for billing, ticketing, provisioning and network management"
  },
  {
    left:"High operational costs due to manual processes",
    right:"Reduces operational overhead, saving you time and money"
  },
  {
    left:"Frustrated customers waiting too long for support",
    right:"Empowers your team with real-time insights for smarter decisions"
  },
  {
    left:"Lack of actionable insights for decision-making",
    right:"Enhances customer satisfaction with faster issue resolution"
  },
  {
    left:"Lack of compliance with governmental reporting requirements, especially for infrastructure grants",
    right:"Fully compliant with governmental reporting requirements to help you access and manage infrastructure grants effectively"
  }
].map((el, i) => <Solution left={el.left} right={el.right} index={i+1} />)

const Solutions = () => {
  return (
    <section className="solutions">
      <h1 className="white-txt dosis">
        Problem &<span className="orange-txt"> Solution</span>
      </h1>
      <div className="wrapper" >
      {data}

      </div>

      {/* <div className="solution-row poppins">
          <div className="help left">
            <h3 className="white-txt">PROBLEM 1</h3>
            <p className="gray-txt">
              Inefficient workflows slowing down operations
            </p>
          </div>
          <div className="mid">

          <img  src="img/solution1.png" />
          </div>
          <div className="help right">
            <h3 className="orange-txt">SOLUTION 1</h3>
            <p className="gray-txt">
              Automates repetitive workflows for billing, ticketing,
              provisioning and network management
            </p>
          </div>
      </div> */}
    </section>
  );
};

export default Solutions;
