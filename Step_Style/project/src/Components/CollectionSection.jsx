import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { pro1, pro2, pro3, pro4, pro5, pro6 } from '../asserts';

const CollectionSection = () => {
  const products = [
    { id: 1, name: 'Green Tangerine', image: pro1 },
    { id: 2, name: 'Blueberry Bliss', image: pro2 },
    { id: 3, name: 'Sunny Lemon', image: pro3},
    
  ];

  return (
    <section className="flex w-full items-center  py-5" style={{ background:'#e2eafc'}}>
      <div className="container text-center mx-auto py-16 px-6 lg:px-16">
        <div className="space-y-14">
          <div className="space-y-6 text-center">
            <h1 className="font-urbanist text-4xl font-bold text-dark md:text-5xl lg:text-6xl">Step & Style Collection</h1>
            <p className="font-gotu text-lg text-secondary md:text-2xl lg:text-3xl">Discover our exclusive collection of stylish and comfortable footwear, perfect for any occasion.</p>
          </div>
          <div className="row">
            {products.map(product => (
              <div className="col-md-4" key={product.id}>
                <div className="d-flex flex-column align-items-center space-y-7 p-5 text-center">
                  <h3 className="font-urbanist text-2xl font-bold text-dark md:text-3xl">{product.name}</h3>
                  <img
                    className="img-fluid mt-2 h-96 w-full transform rounded-xl object-cover object-center shadow-lg transition duration-300 ease-out hover:scale-105"
                    src={product.image}
                    alt={product.name}
                  />
                  <Button variant="dark" className='mt-5'>View Collection</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CollectionSection;
