import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="w-100 bg-bgcolor py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="font-urbanist text-sm text-dark mb-2 mb-md-0 md:text-base">
          Copyright © 2024 STEP&STYLE. Developed by Poornashri
        </p>
        <ul className="list-unstyled d-flex mb-0">
          <li className="ms-3">
            <a href="/" className="text-decoration-none text-dark">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a href="/" className="text-decoration-none text-dark">
              <i className="fab fa-youtube"></i>
            </a>
          </li>
          <li className="ms-3">
            <a href="/" className="text-decoration-none text-dark">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
