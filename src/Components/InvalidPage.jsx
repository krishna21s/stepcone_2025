import React from "react";

import "./InvalidPage.css"; // Import the CSS file
import StepconeLogo from '/Assets/STEPCONE[1].png';
import InvalidPage from '/Assets/invalidpage.png'
const PageNotFound = () => {
    return (
        <>
            <div className=" bg-dark">
                <div className="d-flex justify-content-center align-items-center p-1 invalid-heading">
                    <img src={StepconeLogo} className="" height='45px' alt="" />
                    <h1 className="text-secondary fs-2 pt-2">Stepcone</h1>
                </div>
            </div>
            <div className="page-not-found d-flex flex-column align-items-center justify-content-center text-center">
                <img
                    src={InvalidPage}
                    alt="Page Not Found"
                    className="not-found-image mb-5"
                />
                <h2 className="mb-3 text-dark">Oops! Page Not Found</h2>
                <p className="text-muted">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <a href="/" className="btn btn-primary mt-3">
                    Go Back to Home
                </a>
            </div>
        </>
    );
};

export default PageNotFound;
