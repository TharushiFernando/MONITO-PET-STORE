export const fetchCustomers = async () => {
    try {
      const response = await fetch('https://monitor-backend-rust.vercel.app/api/customers');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to fetch customers', error);
      return { customers: [] };
    }
  };
  