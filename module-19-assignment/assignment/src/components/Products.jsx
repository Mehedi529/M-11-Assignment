import React from 'react';

const Products = () => {
  // Example product data
  const products = [
    { id: 1, name: 'Product 1', price: 20, imageUrl: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 30, imageUrl: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 25, imageUrl: 'product3.jpg' },
    // Add more products as needed
  ];

  return (
    <div>
      <h1>Our Products</h1>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            {/* Add buttons or links for more details, add to cart, etc. */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
