import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const NewsletterSection = () => {
  return (
    <section className="d-flex w-100 align-items-center bg-bgcolor3 py-5" style={{ background:'#e2eafc'}}>
      <div className="container py-4 px-3 px-md-5">
        <div className="d-flex flex-column align-items-center">
          <div className="text-center mb-4">
            <h2 className="display-4 font-weight-bold text-dark">Subscribe to our newsletter</h2>
            <p className="lead text-secondary">Receive updates, exclusive deals, and more!</p>
          </div>
          <div className="input-group w-75 w-md-50 shadow-2xl">
            <input type="text" className="form-control py-3 " placeholder="Your Email" aria-label="Your Email" />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
