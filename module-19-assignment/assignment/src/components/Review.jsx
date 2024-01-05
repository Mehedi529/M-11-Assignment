import React, { useState } from 'react';

const Review = () => {
  // Example review data
  const [reviews, setReviews] = useState([
    { id: 1, username: 'User1', rating: 5, comment: 'Great product! Highly recommended.' },
    { id: 2, username: 'User2', rating: 4, comment: 'Good quality, fast shipping.' },
    // Add more reviews as needed
  ]);

  // Function to add a new review
  const addReview = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  return (
    <div>
      <h1>Customer Reviews</h1>
      {reviews.length === 0 ? (
        <p>No reviews yet. Be the first to review!</p>
      ) : (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p><strong>{review.username}</strong></p>
              <p>Rating: {review.rating}/5</p>
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Add a form for users to submit a new review */}
      <h2>Write a Review</h2>
      <form onSubmit={(e) => { e.preventDefault(); }}>
        <label>
          Username:
          <input type="text" name="username" required />
        </label>
        <label>
          Rating:
          <input type="number" name="rating" min="1" max="5" required />
        </label>
        <label>
          Comment:
          <textarea name="comment" required />
        </label>
        <button type="submit" onClick={() => addReview({
          id: reviews.length + 1,
          username: document.getElementsByName("username")[0].value,
          rating: parseInt(document.getElementsByName("rating")[0].value, 10),
          comment: document.getElementsByName("comment")[0].value
        })}>Submit Review</button>
      </form>
    </div>
  );
};

export default Review;
