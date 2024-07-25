import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection.css';


const brands = [
  'Nike', 'Adidas', 'Puma', 'Reebok', 'New Balance',
  'Asics', 'Under Armour', 'Vans', 'Converse', 'Skechers'
];

const MarqueeSection = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        
        <div className="marquee">
          <div className="marquee-content">
            {brands.map((brand, index) => (
              <div key={index} className="brand-name mx-4">{brand}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
