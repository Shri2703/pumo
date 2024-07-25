import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { follow1,follow2,follow3,follow4,follow5 ,follow6} from '../asserts';

const NewSection = () => {
    const images = [follow1, follow2, follow3, follow4, follow5, follow6];
  return (
    <section className="d-flex w-100 align-items-center bg-light py-5 min-vh-100">
    <div className="container py-4 px-3 px-md-5">
      <div className="text-center mb-5">
        <h1 className="display-4 font-weight-bold text-dark">Follow us @STEP&STYLE</h1>
      </div>
      <div className="row">
        {images.map((src, index) => (
          <div key={index} className="col-6 col-md-2 p-2">
            <div className="position-relative overflow-hidden h-100">
              <img src={src} alt={`Image ${index + 1}`} className="img-fluid w-100 h-100 object-cover" />
              <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 d-none d-md-block bg-dark bg-opacity-25"></div>
              <div className="position-absolute top-50 start-50 translate-middle d-none d-md-block">
                <i className="fas fa-search text-white"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row text-secondary mt-5">
        <div className="col-md-4 text-center">
          <i className="fas fa-shipping-fast fa-2x"></i>
          <h2 className="font-weight-bold mt-3">FREE US SHIPPING</h2>
          <p className="text-muted">On $50+ US orders. Worldwide shipping available.</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="fas fa-lock fa-2x"></i>
          <h2 className="font-weight-bold mt-3">SECURE PAYMENT</h2>
          <p className="text-muted">Your payment information is processed securely.</p>
        </div>
        <div className="col-md-4 text-center">
          <i className="fas fa-envelope fa-2x"></i>
          <h2 className="font-weight-bold mt-3">CONTACT US</h2>
          <p className="text-muted">E-mail us at step&style@gmail.com</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default NewSection;
