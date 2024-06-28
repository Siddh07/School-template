import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import postImage8 from './posts/post-8.jpg';
import postImage9 from './posts/post-9.jpg';
import postImage10 from './posts/post-10.jpg';
import postsData from './News/Posts.json';

const LatestNews = () => {
  const [posts, setPosts] = useState([]);
  const location = useLocation();

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
    if (words.length > 5) {
      return words.slice(0, 5).join(' ') + '...';
    }
    return description;
  };

  const isNewsPage = location.pathname.startsWith('/School-template/news');

  return (
    <div className="mx-auto max-w-7xl p-8">
      {/* w is for the width of the box and adjisting it to the desigred length */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl text-gray-700 font-bold">Latest News</h2>
        {!isNewsPage && (
          <a 
            href="/School-template/news" 
            className="text-gray-200 inline-block rounded border-2 bg-indigo-600 px-2 py-1 hover:border-blue-700 hover:bg-gray-100 hover:text-blue-700 transition duration-500 ease-in-out"
          >
            All News
          </a>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-32">
        {posts.map(post => (
          <a 
            key={post.postId} 
            href={`/School-template/post/${post.postId}`} 
            className="bg-white shadow-md transition duration-350 ease-in-out transform hover:-translate-y-1 hover:scale-105 block"
          >
            <img 
              src={images[post.postId]} 
              alt={post.heading} 
              className="w-full h-48 object-cover" 
            />
            <div className='p-4'>
              <h3 className="text-lg font-semibold">{post.heading}</h3>
              <p className="text-md text-gray-600">{truncateDescription(post.description)}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
