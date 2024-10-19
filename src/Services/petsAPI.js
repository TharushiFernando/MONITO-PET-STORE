export const fetchPets = async () => {
    try {
      const response = await fetch('https://monitor-backend-rust.vercel.app/api/pets');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch pets', error);
      return { pets: [] };
    }
  };
  
  export const fetchPetById = async (id) => {
    try {
      const response = await fetch(`https://monitor-backend-rust.vercel.app/api/pets/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch pet by id', error);
      return null;
    }
  };
  