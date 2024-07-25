import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { blog1, blog2, blog3, blog4, blog5, blog6 } from '../asserts'; // Replace with actual paths

const BlogSection = () => {
  return (
    <section className="d-flex w-100 align-items-center  py-5" style={{ background:'#e2eafc'}}>
      <div className="container py-4 px-3 px-md-5">
        <div className="d-flex flex-column gap-3 gap-md-5">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 gap-md-0">
            <h1 className="font-weight-bold text-dark display-4">On the Blog</h1>
            <button className="btn btn-dark custom-shadow">See more articles</button>
          </div>
          <div className="swiper-container">
            <Carousel fade interval={5000} indicators={false} className="swiper-wrapper">
              <Carousel.Item className="d-flex justify-content-center">
                <div className="d-flex flex-wrap justify-content-center">
                  <div className="col-md-4 p-1">
                    <div className="d-flex flex-column align-items-center p-3">
                      <img className="img-fluid h-50 shadow-lg mb-3" src={blog1} alt="Blog 1" />
                      <div className="text-center">
                        <h3 className="font-weight-bold text-dark">The Secret to Stylish Comfort</h3>
                        <p className="text-muted">Discover the secrets behind our comfortable and stylish footwear. At Step & Style, we believe in blending fashion with functionality to create the perfect shoe for every occasion.</p>
                        <button className="btn btn-link text-secondary font-weight-bold">READ MORE</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 p-1">
                    <div className="d-flex flex-column align-items-center p-3">
                      <img className="img-fluid h-50 shadow-lg mb-3" src={blog2} alt="Blog 2" />
                      <div className="text-center">
                        <h3 className="font-weight-bold text-dark">Top 7 Footwear Trends</h3>
                        <p className="text-muted">Stay ahead of the fashion curve with our insights on the top 7 footwear trends of the season. From bold colors to innovative designs, find out what’s in vogue.</p>
                        <button className="btn btn-link text-secondary font-weight-bold">READ MORE</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 p-1">
                    <div className="d-flex flex-column align-items-center p-3">
                      <img className="img-fluid h-50 shadow-lg mb-3" src={blog3} alt="Blog 3" />
                      <div className="text-center">
                        <h3 className="font-weight-bold text-dark">Caring for Your Shoes</h3>
                        <p className="text-muted">Learn the best practices for caring for your Step & Style shoes. Our guide covers everything from cleaning tips to storage advice to keep your footwear looking new.</p>
                        <button className="btn btn-link text-secondary font-weight-bold">READ MORE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item className="d-flex justify-content-center">
                <div className="d-flex flex-wrap justify-content-center">
                  <div className="col-md-4 p-1">
                    <div className="d-flex flex-column align-items-center p-3">
                      <img className="img-fluid h-50 shadow-lg mb-3" src={blog4} alt="Blog 4" />
                      <div className="text-center">
                        <h3 className="font-weight-bold text-dark">Seasonal Footwear Guide</h3>
                        <p className="text-muted">Find out how to adapt your footwear wardrobe to the changing seasons. Our guide provides tips on choosing the right shoes for every weather condition.</p>
                        <button className="btn btn-link text-secondary font-weight-bold">READ MORE</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 p-1">
                    <div className="d-flex flex-column align-items-center p-3">
                      <img className="img-fluid h-50 shadow-lg mb-3" src={blog5} alt="Blog 5" />
                      <div className="text-center">
                        <h3 className="font-weight-bold text-dark">Understanding Shoe Materials</h3>
                        <p className="text-muted">Delve into the different materials used in our footwear. Learn about the benefits of each material and how they contribute to the overall comfort and style of our shoes.</p>
                        <button className="btn btn-link text-secondary font-weight-bold">READ MORE</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 p-1">
                    <div className="d-flex flex-column align-items-center p-3">
                      <img className="img-fluid h-50 shadow-lg mb-3" src={blog6} alt="Blog 6" />
                      <div className="text-center">
                        <h3 className="font-weight-bold text-dark">Choosing the Right Fit</h3>
                        <p className="text-muted">Find out how to choose the right fit for your shoes. Our guide provides tips on measuring your feet and selecting the perfect size for optimal comfort.</p>
                        <button className="btn btn-link text-secondary font-weight-bold">READ MORE</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
