import React from 'react';
import SchoolEvents from './SchoolsEvents';
import NewsContents from './NewsContents';

const News = () => {
  return (
    <div>
      <div>
        <h2>Latest Updates</h2>
        <NewsContents />
      </div>
      <SchoolEvents />
    </div>
  );
}

export default News;
