import React, { useEffect, useState } from 'react';
import { fetchPets } from '../Services/petsAPI';
import PaginationComponent from '../components/Pagination';

const CategoryPage = () => {
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
      <h1 className="text-center text-3xl font-bold mb-6">Small Dogs</h1>
      <PaginationComponent products={pets} />
    </div>
  );
};

export default CategoryPage;
