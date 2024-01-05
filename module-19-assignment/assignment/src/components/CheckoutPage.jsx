import React, { useState } from 'react';

const CheckoutPage = () => {
  // Example cart items
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20, quantity: 2 },
    { id: 2, name: 'Product 2', price: 30, quantity: 1 },
    // Add more cart items as needed
  ]);

  // Example user information
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    // Add more user information fields as needed
  });

  // Function to handle input changes for user information
  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevInfo => ({ ...prevInfo, [name]: value }));
  };

  // Calculate total price
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Function to handle the checkout process
  const handleCheckout = () => {
    // Perform checkout logic (e.g., send order to backend, clear cart, etc.)
    console.log('Checkout successful!');
    // You can add more logic here, such as redirecting to a thank-you page.
  };

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <h2>Order Summary</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </li>
          ))}
        </ul>
        <p>Total: ${total}</p>
      </div>
      <div>
        <h2>Shipping Information</h2>
        <form>
          <label>
            First Name:
            <input type="text" name="firstName" value={userInfo.firstName} onChange={handleUserInfoChange} />
          </label>
          <label>
            Last Name:
            <input type="text" name="lastName" value={userInfo.lastName} onChange={handleUserInfoChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={userInfo.email} onChange={handleUserInfoChange} />
          </label>
          {/* Add more shipping information fields as needed */}
        </form>
      </div>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default CheckoutPage;
