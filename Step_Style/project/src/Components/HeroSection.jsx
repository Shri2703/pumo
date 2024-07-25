import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Hero1, Hero2, Hero3, Hero4 } from '../asserts';
import './HeroSection.css';
import FeatureSection from './FeatureSection';
import CollectionSection from './CollectionSection';
import MarqueeSection from './MarqueeSection';
import AboutSection from './AboutSection';
import BlogSection from './BlogSection';
import NewSection from './NewSection';
import NewsletterSection from './NewsletterSection';
import Footer from './Footer';



const HeroSection = () => {
  return (
    <Container fluid className="p-0">
      <Carousel fade interval={5000}>
        <Carousel.Item>
          <img
            className=" d-block w-100  "
            src={Hero1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className='text-dark'> Discover the Latest in Footwear</h3>
            <p className='text-dark'>Stay ahead of the trends with our new collection.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={Hero2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3  className='text-dark'>Comfort Meets Style</h3>
            <p  className='text-dark'>Experience unmatched comfort with our latest arrivals.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={Hero3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3  className='text-dark'>Unleash Your Inner Athlete</h3>
            <p  className='text-dark'>Gear up with our performance footwear collection.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={Hero4}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3  className='text-dark'>Elegance in Every Step</h3>
            <p  className='text-dark'>Discover our range of formal footwear.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <FeatureSection />
      <CollectionSection />
      <MarqueeSection />

      <AboutSection />
      <BlogSection />
      <NewSection />
      <NewsletterSection />
      <Footer />
        

      
    </Container>
  );
};

export default HeroSection;
