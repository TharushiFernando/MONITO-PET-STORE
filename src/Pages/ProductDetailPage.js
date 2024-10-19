import React, { useState, useEffect } from 'react';
import { fetchPetById } from '../Services/petsAPI';

const ProductPage = ({ match }) => {
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const getPet = async () => {
      const data = await fetchPetById(match.params.id);
      setPet(data);
    };
    getPet();
  }, [match.params.id]);

  return (
    <div className="container mx-auto p-5">
      {pet ? (
        <>
          <h1 className="text-3xl font-bold">{pet.name}</h1>
          <img src={pet.image} alt={pet.name} />
          <p>{pet.price} VND</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductPage;
