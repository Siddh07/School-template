import React from 'react';
import SchoolEvents from './News/SchoolsEvents';
import NewsPosts from './News/NewsPosts';
import LatestPosts from './News/LatestPosts';

import NewsContents from './NewsContents';


const News = () => {
  return (
    <div>
      <div>
        <LatestPosts />
      </div>
      <div className='mt-4'>
        <NewsPosts />
      </div>
      <div className='mt-4'>
        <SchoolEvents />
      </div>
    </div>
  );
}

export default News;
