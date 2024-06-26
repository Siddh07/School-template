import React from 'react';
import SchoolEvents from './News/SchoolsEvents';
import NewsPosts from './News/NewsPosts';
import LatestPosts from './News/LatestPosts';


const News = () => {
  return (
    <div>
      <div>
        <LatestPosts />
      </div>
      <div className='mt-8'>
        <NewsPosts />
      </div>
      <div className='mt-4'>
        <SchoolEvents />
      </div>
    </div>
  );
}

export default News;
