import React, { useState, useEffect } from 'react';

const Blog = () => {
  // Example blog posts
  const [blogPosts, setBlogPosts] = useState([]);

  // Fetch blog posts on component mount (you might want to do this using an API call)
  useEffect(() => {
    // Example API call
    // fetchBlogPosts()
    //   .then((posts) => setBlogPosts(posts))
    //   .catch((error) => console.error('Error fetching blog posts:', error));
    
    // Example blog posts for demonstration
    const dummyPosts = [
      { id: 1, title: 'Introduction to Our Products', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 2, title: '10 Tips for a Great Shopping Experience', content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
      // Add more blog posts as needed
    ];

    setBlogPosts(dummyPosts);
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {blogPosts.length === 0 ? (
        <p>No blog posts available.</p>
      ) : (
        <ul>
          {blogPosts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              {/* Add more details or links as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Blog;
