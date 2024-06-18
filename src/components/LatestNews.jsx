import React, { useState, useEffect } from 'react';
import postImage8 from '../posts/post-8.jpg';
import postImage9 from '../posts/post-9.jpg';
import postImage10 from '../posts/post-10.jpg';
import postsData from './Posts.json';

const LatestNews = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Sorting posts by postId in descending order and selecting the top 3
    const sortedPosts = postsData.posts.sort((a, b) => b.postId - a.postId).slice(0, 3);
    setPosts(sortedPosts);
  }, []);

  const images = {
    "8": postImage8,
    "9": postImage9,
    "10": postImage10
  };

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 4) {
      return words.slice(0, 4).join(' ') + '...';
    }
    return description;
  };

  return (
    <div className="mx-auto max-w-6xl p-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl text-gray-700 font-bold">Latest News</h2>
        <a 
          href="/School/news" 
          className="text-gray-200 inline-block rounded border-2 bg-indigo-600 px-4 py-2 hover:border-blue-700 hover:bg-gray-200 hover:text-blue-700 transition duration-500 ease-in-out"
        >
          Read all News
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.map(post => (
          <a 
            key={post.postId} 
            href={`/School/news/post-${post.postId}`} 
            className="bg-white p-4 shadow-md rounded-md hover:bg-gray-100 transition duration-150 ease-in-out transform hover:-translate-y-1 hover:scale-105 block"
          >
            <img 
              src={images[post.postId]} 
              alt={post.heading} 
              className="w-full h-48 object-cover rounded-md mb-4" 
            />
            <h3 className="text-xl font-semibold">{post.heading}</h3>
            <p className="text-md text-gray-600">{truncateDescription(post.description)}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
