import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

export default function Home() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Fetch the pets data from the API
    const fetchPets = async () => {
      const res = await fetch('https://monitor-backend-rust.vercel.app/api/pets');
      const data = await res.json();
      setPets(data);
    };

    fetchPets();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <header className="bg-yellow-100 p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800">One More Friend, Thousands More Fun!</h1>
        <p className="mt-4 text-xl">Find your dream pet today from our wide selection of adorable pets.</p>
        <button className="mt-6 bg-green-500 text-white p-4 rounded">View Pets</button>
      </header>

      {/* Pet Listing Section */}
      <section className="py-10 px-4">
        <h2 className="text-3xl font-semibold mb-6">Take a Look at Some of Our Pets</h2>
        <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}>
          {pets.map((pet) => (
            <SwiperSlide key={pet.id}>
              <div className="bg-white p-4 shadow rounded">
                <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover rounded-t" />
                <h3 className="text-xl font-medium mt-4">{pet.name}</h3>
                <p className="text-gray-500">{pet.breed} - {pet.age} years</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
