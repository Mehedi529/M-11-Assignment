import React from 'react';

const ThankYouPage = ({ orderDetails }) => {
  return (
    <div>
      <h1>Thank You for Your Order!</h1>
      <p>Your order has been successfully placed. Here are the details:</p>
      
      <ul>
        <li><strong>Order ID:</strong> {orderDetails.orderId}</li>
        <li><strong>Total Amount:</strong> ${orderDetails.totalAmount}</li>
        {/* Add more order details as needed */}
      </ul>

      <p>We appreciate your business and hope you enjoy your purchase.</p>
    </div>
  );
};

export default ThankYouPage;
