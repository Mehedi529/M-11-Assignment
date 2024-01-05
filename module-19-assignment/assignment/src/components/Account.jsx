import React, { useState, useEffect } from 'react';

const Account= () => {
  // Example user data
  const [user, setUser] = useState({
    id: 1,
    username: 'example_user',
    email: 'user@example.com',
    // Add more user data as needed
  });

  // Example order history
  const [orderHistory, setOrderHistory] = useState([]);

  // Fetch order history on component mount (you might want to do this using an API call)
  useEffect(() => {
    // Example API call
    // fetchOrderHistory(user.id)
    //   .then((orders) => setOrderHistory(orders))
    //   .catch((error) => console.error('Error fetching order history:', error));
  }, [user.id]);

  return (
    <div>
      <h1>Account Information</h1>
      <section>
        <h2>User Details</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        {/* Add more user details as needed */}
      </section>

      <section>
        <h2>Order History</h2>
        {orderHistory.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          <ul>
            {orderHistory.map((order) => (
              <li key={order.id}>
                {/* Display order details */}
                Order ID: {order.id}, Date: {order.date}, Total: {order.total}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2>Account Settings</h2>
        {/* Add form or settings components for updating user information */}
      </section>
    </div>
  );
};

export default Account;
