import React, { useState } from 'react';
import Search from './Search';

const ProductPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 20 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 25 },
    // Add more products as needed
  ]);

  const handleSearch = (filteredProducts) => {
    // Use the filtered products in your component state or for rendering
    console.log('Filtered Products:', filteredProducts);
  };

  return (
    <div>
      <h1>Product Page</h1>
      <Search products={products} onSearch={handleSearch} />

      {/* Render the products based on the search results */}
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;
