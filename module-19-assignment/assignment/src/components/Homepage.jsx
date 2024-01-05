import React from 'react';

const Homepage = () => {
  // Example featured products
  const featuredProducts = [
    { id: 1, name: 'Product 1', price: 20, imageUrl: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 30, imageUrl: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 25, imageUrl: 'product3.jpg' },
    // Add more featured products as needed
  ];

  return (
    <div>
      <section>
        <h1>Welcome to Our Online Store</h1>
        <p>Discover the latest and greatest products right here.</p>
      </section>

      <section>
        <h2>Featured Products</h2>
        <div>
          {featuredProducts.map(product => (
            <div key={product.id}>
              <img src={product.imageUrl} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              {/* Add a link to view the product details or add to cart */}
            </div>
          ))}
        </div>
      </section>

      {/* Add more sections for promotions, new arrivals, etc. as needed */}
    </div>
  );
};

export default Homepage;
