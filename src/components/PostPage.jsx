import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import postsData from './News/Posts.json'; // Adjust path as necessary

// Import images statically or use a function to map post ids to image paths
import postImage1 from './posts/post-1.jpg';
import postImage2 from './posts/post-2.jpg';
import postImage3 from './posts/post-3.jpg';
import postImage4 from './posts/post-4.jpg';
import postImage5 from './posts/post-5.jpg';
import postImage6 from './posts/post-6.jpg';
import postImage7 from './posts/post-7.jpg';
import postImage8 from './posts/post-8.jpg';
import postImage9 from './posts/post-9.jpg';
import postImage10 from './posts/post-10.jpg';
import JohnDoeImage from '../assets/John Doe.jpg'; // Assuming this is the correct import path
import AliceJohnsonImage from '../assets/Alice Johnson.jpg'; // Assuming this is the correct import path

// Adjust path as necessary
const images = {
  "1": postImage1,
  "2": postImage2,
  "3": postImage3,
  "4": postImage4,
  "5": postImage5,
  "6": postImage6,
  "7": postImage7,
  "8": postImage8,
  "9": postImage9,
  "10": postImage10
};

const authors = {
  "John Doe": JohnDoeImage,
  "Alice Johnson": AliceJohnsonImage
};

const formatText = (text) => {
  text = text.replace(/\*\*\*(.*?)\*\*\*/g, '<strong>$1</strong>');
  text = text.replace(/\*i\*(.*?)\*i\*/g, '<em>$1</em>');
  text = text.replace(/\*u\*(.*?)\*u\*/g, '<u>$1</u>');
  text = text.replace(/\n/g, '<br>');

  return text;
};

const PostPage = () => {
  let { postId } = useParams();
  const post = postsData.posts.find(post => post.postId === postId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return <div>Post not found</div>; // Handle case where post is not found
  }

  const authorImage = authors[post.author.name];
  const formattedBody = formatText(post.body);

  return (
    <div className="mx-auto max-w-3xl p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <img
          src={images[post.postId]}
          alt={post.heading}
          className="w-full h-96 object-cover rounded-lg mb-4"
        />
        <h1 className="text-3xl font-semibold mb-4 text-center text-gray-800">{post.heading}</h1>
        <div className="flex items-center mb-4 ml-4">
          {authorImage && (
            <div className="flex-shrink-0">
              <img
                src={authorImage}
                alt={post.author.name}
                className="w-[50px] h-[50px] object-cover rounded-full"
              />
            </div>
          )}
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
            <p className="text-sm text-gray-500">{new Date(post.datePublished).toLocaleDateString()}</p>
          </div>
        </div>
        <p className="text-gray-600 mb-4 p-2" dangerouslySetInnerHTML={{ __html: formattedBody }} />
      </div>
    </div>
  );
};

export default PostPage;
