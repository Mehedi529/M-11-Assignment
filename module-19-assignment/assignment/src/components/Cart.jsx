import React, { useState } from 'react';

const Cart = () => {
  // Example cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20, quantity: 2 },
    { id: 2, name: 'Product 2', price: 30, quantity: 1 },
    // Add more cart items as needed
  ]);

  // Function to update quantity in the cart
  const updateQuantity = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  // Function to remove item from the cart
  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  // Calculate total price
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <p>{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: ${total}</p>
          {/* Add checkout button or other actions as needed */}
        </div>
      )}
    </div>
  );
};

export default Cart;
