import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  return (
    <div className="container">
      <div className="text-center my-3">
        <h1>Item List</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <ProductCard amount={52} imageUrl="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="col">
          <ProductCard amount={93} imageUrl="https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="col">
          <ProductCard amount={90} imageUrl="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
        <div className="col">
          <ProductCard amount={98} imageUrl="https://images.pexels.com/photos/2562992/pexels-photo-2562992.png?auto=compress&cs=tinysrgb&w=600" />
        </div>
      </div>
    </div>
  );
};

export default ProductList;