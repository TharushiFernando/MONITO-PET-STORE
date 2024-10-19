export const fetchProducts = async () => {
    try {
      const response = await fetch('https://monitor-backend-rust.vercel.app/api/products');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch products', error);
      return { products: [] };
    }
  };
  