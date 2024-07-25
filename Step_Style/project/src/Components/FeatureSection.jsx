import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fea1, fea2, fea3 } from '../asserts'; // Update with actual paths

const FeatureSection = () => {
  return (
    <section className="d-flex align-items-center bg-light " style={{ minHeight: '100vh' }}>
      <div className="container mx-auto py-16 px-6 lg:px-16 mt-5">
        <div className="space-y-4">
          <div className="text-center md:text-5xl lg:text-7xl">
          <h1 className="font-weight-bold text-dark mb-4 " >
            Discover the Latest Trends in Footwear for Every Occasion
          </h1>


          </div>
          <div className="row">
            <div className="col-md-6 pb-2">
              <div className="position-relative overflow-hidden h-100 " style={{ height: '100%' }}>
                <div className="position-absolute top-0 start-0 w-100 h-100 " style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5))', zIndex: 1 }}></div>
                <img
                  src={fea2}
                  alt="Back in Stock"
                  className="img-fluid w-100 h-100"
                  style={{ transition: 'transform 1s ease-in-out', objectFit: 'cover', height: '100%' }}
                />
                <span className="position-absolute top-50 start-50 translate-middle text-white font-weight-bold text-center" style={{ fontSize: '2rem', zIndex: 2 }}>
                  Back in Stock
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-12 mb-4">
                  <div className="position-relative overflow-hidden h-100" style={{ height: '50%' }}>
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5))', zIndex: 1 }}></div>
                    <img
                      src={fea1}
                      alt="On Sale"
                      className="img-fluid w-100 h-100"
                      style={{ transition: 'transform 1s ease-in-out', objectFit: 'cover', height: '100%' }}
                    />
                    <span className="position-absolute top-50 start-50 translate-middle text-white font-weight-bold text-center" style={{ fontSize: '2rem', zIndex: 2 }}>
                      On Sale
                    </span>
                  </div>
                </div>
                <div className="col-12 mb-4">
                  <div className="position-relative overflow-hidden h-100" style={{ height: '50%' }}>
                    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5))', zIndex: 1 }}></div>
                    <img
                      src={fea3}
                      alt="Trending Now"
                      className="img-fluid w-100 h-100"
                      style={{ transition: 'transform 1s ease-in-out', objectFit: 'cover', height: '100%' }}
                    />
                    <span className="position-absolute top-50 start-50 translate-middle text-white font-weight-bold text-center" style={{ fontSize: '2rem', zIndex: 2 }}>
                      Trending Now
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
