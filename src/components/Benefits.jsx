import React from "react";

const Benefits = () => (
  <>
    <section className="benefits poppins">
      <h1 className="dosis center-text">
        Key Benefits and <span className="orange-txt">Metrics</span>
      </h1>
      <h3 className="subtitle poppins fw4 gray-txt center-text">Clear Value Propositions</h3>

      <div className="benefits-wrapper">
        <div className="benefit-column-left">
          <div className="benefit-item orange-txt">
            <h3 className="column-title dosis">Increase Efficiency</h3>
            <p className="black-txt">Automate up to 70% of manual workflows.</p>
          </div>
          <div className="benefit-item blue-txt">
            <h3 className="column-title dosis">Enhance Productivity</h3>
            <p className="black-txt">Accelerate new subscriber onboarding by 50%.</p>
          </div>
        </div>

        <div className="benefit-image">
          <img src="img/circles.png" alt="Venn Diagram" className="circles" />
        </div>

        <div className="benefit-column-right">
          <div className="benefit-item lillac-txt">
            <h3 className="column-title dosis">Reduce Operational Costs</h3>
            <p className="black-txt">Save up to 40% on operational expenses.</p>
          </div>
          <div className="benefit-item">
            <h3 className="column-title dosis">Improve Customer Experience</h3>
            <p>Cut average support ticket resolution time in half.</p>
          </div>
        </div>
      </div>
    </section>

    <section className="calculator-section">
      <div className="calculator-box">
        <h2 className="center-text dosis">Savings Calculator</h2>
        <div className="calculator-content">
          <div className="form">
            <label className="small">Number of subscribers</label>
            <input type="number" />

            <label className="small">Services offered</label>
            <input type="text" />

            <label className="small">
              Approximate monthly operational cost
            </label>
            <input type="number" />
          </div>

          <div className="result">
            <p>
              Estimated yearly savings in productivity:
              <span className="orange-txt bold">$10,000</span>
            </p>
            <p>
              Estimated cost reduction based on automation and efficiency
              improvements: <span className="orange-txt bold">$5,000</span>
            </p>

            <div className="button-group">
              <button className="button orange-bg white-txt fw3 rounded">
                Schedule a Demo
              </button>
              <button className="button black-bg white-txt fw3 rounded">
                Talk to Our Experts
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Benefits;
