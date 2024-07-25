import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { about1, about2, about3 } from '../asserts'; // Replace with actual paths

const AboutSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5 className='text-dark font-weight-bold'>ABOUT US</h5>
            <h2 className='mt-3 text-dark font-weight-bold'>STEP & STYLE</h2>
            <p className='mt-3'>
              At Step & Style, we are dedicated to crafting footwear that combines comfort and fashion seamlessly. Our designs are inspired by the latest trends while ensuring the highest quality.
            </p>
            <p className='mt-3'>
              Our mission is to provide every customer with stylish footwear that empowers them to express their unique personality and enjoy every step they take.
            </p>
            <button className='btn btn-dark mt-3'>Brand Story</button>
          </div>

          <div className='col-md-6 p-2'>
            <div className="d-flex justify-content-center align-items-center h-100">
              <Carousel fade interval={3000} className="w-100">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={about1} // Replace with actual image source
                    alt="First slide"
                    style={{ height: '90%', objectFit: 'cover' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={about2} // Replace with actual image source
                    alt="Second slide"
                    style={{ height: '100%', objectFit: 'cover' }}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={about3} // Replace with actual image source
                    alt="Third slide"
                    style={{ height: '100%', objectFit: 'cover' }}
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
