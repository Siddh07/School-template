import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import postsData from './Posts.json';
import postImage1 from '../posts/post-1.jpg';
import postImage2 from '../posts/post-2.jpg';
import postImage3 from '../posts/post-3.jpg';
import postImage4 from '../posts/post-4.jpg';
import postImage5 from '../posts/post-5.jpg';
import postImage6 from '../posts/post-6.jpg';
import postImage7 from '../posts/post-7.jpg';

const NewsPosts = () => {
  // Sorting posts by datePublished in descending order
  const sortedPosts = postsData.posts.sort((a, b) => new Date(b.datePublished) - new Date(a.datePublished));

  // Excluding the top 3 latest posts
  const filteredPosts = sortedPosts.slice(3);

  const images = {
    "1": postImage1,
    "2": postImage2,
    "3": postImage3,
    "4": postImage4,
    "5": postImage5,
    "6": postImage6,
    "7": postImage7
  };

  const truncateDescription = (description) => {
    return description.split(' ').slice(0, 5).join(' ') + '...';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };

  const [visiblePosts, setVisiblePosts] = useState(3);
  const isMobile = window.innerWidth <= 768;

  const handleViewMore = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + (isMobile ? 2 : 3));
  };

  const handleViewAll = () => {
    setVisiblePosts(filteredPosts.length);
  };

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 gap-8 px-[8%]">
        {filteredPosts.slice(0, visiblePosts).map((post) => (
          <Link key={post.postId} to={`/post/${post.postId}`} className="text-black">
            <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow hover:-translate-y-1 hover:scale-105 duration-1000">
              <img
                src={images[post.postId]}
                alt={post.heading}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 text-gray-800">{post.heading}</h2>
                <p className="text-gray-600 mb-4">{truncateDescription(post.description)}</p>
                <p className="text-gray-500 text-sm">{formatDate(post.datePublished)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {visiblePosts < filteredPosts.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleViewMore}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            View More
          </button>
        </div>
      )}
      {visiblePosts < filteredPosts.length && visiblePosts >= filteredPosts.length / 2 && (
        <div className="text-center mt-4">
          <button
            onClick={handleViewAll}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsPosts;
