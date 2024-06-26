import React from 'react';
import postsData from './Posts.json';

const NewsPosts = () => {
  // Sorting posts by datePublished in descending order
  const sortedPosts = postsData.posts.sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished));

  // Excluding the top 3 latest posts
  const filteredPosts = sortedPosts.slice(3);

  return (
    <div>
      {filteredPosts.map(post => (
        <div key={post.postId}>
          <h2>{post.heading}</h2>
          <p>{post.description}</p>
          <p>{post.datePublished}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsPosts;
