import React from "react";
import "./App.css"; // Add custom styling

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <h1>Monito</h1>
        </div>
        <nav className="nav">
          <ul>
            <li>Category</li>
            <li>About</li>
            <li>Contact</li>
            <li>Join Our Community</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>One More Friend, Thousands More Fun!</h2>
          <p>
            Having a pet can increase your happiness, reduce stress, and boost
            your energy levels. Find your new furry friend now!
          </p>
          <button>View Pets</button>
          <button>Donate Now</button>
        </div>
        <div className="hero-image">
          <img src="hero-image.jpg" alt="A person holding a dog" />
        </div>
      </section>

      {/* Pet Listing Section */}
      <section className="pet-listing">
        <h3>Take a Look At Some Of Our Pets</h3>
        <div className="pet-cards">
          {/* Repeat for each pet */}
          <PetCard
            image="dog1.jpg"
            name="M002"
            breed="Frenchie Greg Standard"
            age="7.5 Weeks"
          />
          <PetCard
            image="dog2.jpg"
            name="M003"
            breed="Frenchie Greg Yellow"
            age="7.5 Weeks"
          />
          {/* Add more pets */}
        </div>
        <button>View More</button>
      </section>

      {/* Products Section */}
      <section className="products">
        <h3>Need to choose your pet essentials for your new pet?</h3>
        <div className="product-cards">
          <ProductCard
            image="product1.jpg"
            name="PawTex Multi Cat Food"
            price="$12.00"
          />
          <ProductCard
            image="product2.jpg"
            name="Feline Rex Multi Cat Food"
            price="$18.00"
          />
          {/* Add more products */}
        </div>
        <button>View More</button>
      </section>

      {/* Adoption Section */}
      <section className="adoption">
        <h3>Adoption - We Need Help, So Do They</h3>
        <p>Join our program to help these pets find a loving home.</p>
        <button>Learn More</button>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <h3>Useful Pet Knowledge</h3>
        <div className="blog-cards">
          <BlogCard
            title="Things You Need To Know"
            content="How to take care of a new puppy"
          />
          <BlogCard
            title="Why Dogs Are Loyal Friends"
            content="Understanding the deep bond between pets and humans"
          />
          {/* Add more blogs */}
        </div>
        <button>View More</button>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <h3>Register Now So You Don’t Miss Our Program</h3>
        <div className="newsletter">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <p>&copy; 2024 Monito. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Pet Card Component
const PetCard = ({ image, name, breed, age }) => {
  return (
    <div className="pet-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{breed}</p>
      <p>{age}</p>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ image, name, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{price}</p>
    </div>
  );
};

// Blog Card Component
const BlogCard = ({ title, content }) => {
  return (
    <div className="blog-card">
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
};

export default App;
