import React from 'react';
import Frequently from './Frequently';

const Frequently = () => {
  // Example FAQ data
  const faqData = [
    {
      question: 'How do I place an order?',
      answer: 'To place an order, simply browse our products, add items to your cart, and proceed to checkout.'
    },
    {
      question: 'Can I modify or cancel my order?',
      answer: 'Once an order is placed, modifications or cancellations are not possible. Please review your order carefully before confirming.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards, PayPal, and other secure payment methods. Please visit our payment page for more details.'
    },
    // Add more FAQ entries as needed
  ];

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <ul>
        {faqData.map((faq, index) => (
          <li key={index}>
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Frequently;
