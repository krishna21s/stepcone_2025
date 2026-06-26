import React, { useState } from "react";
import "./Faq.css";

const FaqBox = () => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="faq-box custom-scrollbar">
      <div className="accordion" id="accordionExample">
        {/* First Question */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button ${openItem === 1 ? "" : "collapsed"}`}
              type="button"
              onClick={() => handleToggle(1)}
            >
              Where can I find the menu bar?
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse ${openItem === 1 ? "show" : ""}`}
          >
            <div className="accordion-body text-warning-emphasis px-3">
              The menu bar is located in the top-right corner of the screen.
            </div>
          </div>
        </div>

        {/* Second Question */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className={`accordion-button ${openItem === 2 ? "" : "collapsed"}`}
              type="button"
              onClick={() => handleToggle(2)}
            >
              How do I sign up?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={`accordion-collapse collapse ${openItem === 2 ? "show" : ""}`}
          >
            <div className="accordion-body text-warning-emphasis px-3">
              Go to the login page via the menu bar, click "Don't have an account?" and fill out the registration form to sign up.
            </div>
          </div>
        </div>

        {/* Third Question */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className={`accordion-button ${openItem === 3 ? "" : "collapsed"}`}
              type="button"
              onClick={() => handleToggle(3)}
            >
              How do I register for an event?
            </button>
          </h2>
          <div
            id="collapseThree"
            className={`accordion-collapse collapse ${openItem === 3 ? "show" : ""}`}
          >
            <div className="accordion-body text-warning-emphasis px-3">
              Navigate to the "Registration" page via the menu bar, select your desired event, and complete the registration form with the required details.
            </div>
          </div>
        </div>

        {/* Fourth Question */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className={`accordion-button ${openItem === 4 ? "" : "collapsed"}`}
              type="button"
              onClick={() => handleToggle(4)}
            >
              How do I access my profile?
            </button>
          </h2>
          <div
            id="collapseFour"
            className={`accordion-collapse collapse ${openItem === 4 ? "show" : ""}`}
          >
            <div className="accordion-body text-warning-emphasis px-3">
              After logging in, you can find your profile by navigating through the menu bar.
            </div>
          </div>
        </div>

        {/* Fifth Question */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className={`accordion-button ${openItem === 5 ? "" : "collapsed"}`}
              type="button"
              onClick={() => handleToggle(5)}
            >
              Where can I find general registration details?
            </button>
          </h2>
          <div
            id="collapseFive"
            className={`accordion-collapse collapse ${openItem === 5 ? "show" : ""}`}
          >
            <div className="accordion-body text-warning-emphasis px-3">
              Visit the "Details" page via the menu bar and click on the play button inside the circle.
            </div>
          </div>
        </div>

        {/* Sixth Question */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className={`accordion-button ${openItem === 6 ? "" : "collapsed"}`}
              type="button"
              onClick={() => handleToggle(6)}
            >
              What should I do if I forget my password?
            </button>
          </h2>
          <div
            id="collapseSix"
            className={`accordion-collapse collapse ${openItem === 6 ? "show" : ""}`}
          >
            <div className="accordion-body text-warning-emphasis px-3">
              Submit a query through the "Details" page (see next question to raise query), and we will contact you shortly to assist with resetting your password.
            </div>
          </div>
        </div>

        {/* Seventh Question */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className={`accordion-button ${openItem === 7 ? "" : "collapsed"}`}
              type="button"
              onClick={() => handleToggle(7)}
            >
              How can I raise a query?
            </button>
          </h2>
          <div
            id="collapseSeven"
            className={`accordion-collapse collapse ${openItem === 7 ? "show" : ""}`}
          >
            <div className="accordion-body text-warning-emphasis px-3">
              Navigate to the "Details" page via the menu bar, after that click the play button 4 times inside circle and complete the query form. Our team will contact you shortly.
            </div>
          </div>
        </div>

        {/* Eighth Question */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button
              className={`accordion-button ${openItem === 8 ? "" : "collapsed"}`}
              type="button"
              onClick={() => handleToggle(8)}
            >
              Where can I find my payment receipt?
            </button>
          </h2>
          <div
            id="collapseEight"
            className={`accordion-collapse collapse ${openItem === 8 ? "show" : ""}`}
          >
            <div className="accordion-body text-warning-emphasis px-3">
              Your payment receipt will be sent to your registered email address. If you haven't received it, please raise a query.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqBox;
