
import React from 'react';

const PetCard = ({ name, image, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default PetCard;
