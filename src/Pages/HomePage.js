import React, { useState, useEffect } from 'react';
import { fetchPets } from '../Services/petsAPI';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const getPets = async () => {
      const data = await fetchPets();
      setPets(data.pets);
    };
    getPets();
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Featured Pets</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pets.map(pet => (
          <ProductCard key={pet.id} product={pet} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
