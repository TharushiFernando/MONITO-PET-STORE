import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md">
      <img src={product.image} alt={product.name} className="rounded-t-lg" />
      <div className="p-5">
        <h5 className="text-2xl font-bold">{product.name}</h5>
        <p className="text-gray-700">{product.price} VND</p>
      </div>
    </div>
  );
};

export default ProductCard;
