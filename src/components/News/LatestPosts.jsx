import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import postsData from './Posts.json';
import postImage8 from '../posts/post-8.jpg';
import postImage9 from '../posts/post-9.jpg';
import postImage10 from '../posts/post-10.jpg';

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Sort posts in descending order by datePublished
    const sortedPosts = postsData.posts.sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished));
    // Set the top 3 posts in state
    setPosts(sortedPosts.slice(0, 3));
  }, []);

  const images = {
    "8": postImage8,
    "9": postImage9,
    "10": postImage10
  };

  const truncateDescription = (description) => {
    return description.split(' ').slice(0, 4).join(' ') + '...';
  };

  return (
    <div className="container mx-auto p-6 md:p-2 mt-4">
      {posts.length === 0 ? (
        <p className="text-center text-gray-600">No posts available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:px-24">
          {posts.map((post) => (
            <Link key={post.postId} to={`/post/${post.postId}`} className="text-black">
              <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow hover:-translate-y-1 hover:scale-105 duration-1500">
                <img 
                  src={images[post.postId]} 
                  alt={post.heading} 
                  className="w-full h-48 object-cover rounded-t-lg" 
                />
                <div className="px-4 py-2">
                  <h2 className="text-lg font-semibold mb-2 text-gray-800">{post.heading}</h2>
                  <p className="text-gray-700 mb-4">{truncateDescription(post.description)}</p>
                  <p className="text-gray-500 text-sm">{new Date(post.datePublished).toLocaleDateString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default LatestPosts;
