// src/components/PetList.js (with error handling)
import React, { useEffect, useState } from 'react';
import PetCard from '../components/Pagination';

const PetList = () => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://monitor-backend-rust.vercel.app/api/pets")
      .then(response => response.json())
      .then(data => setPets(data))
      .catch(err => setError("Failed to load pets. Please try again later."));
  }, []);

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {pets.map(pet => (
        <PetCard key={pet.id} name={pet.name} image={pet.image} description={pet.description} />
      ))}
    </div>
  );
};

export default PetList;
