import React from 'react';


function TitleLocationAuthor({ title, location, author }) {
  return (
    <div className='title-location-author'>
      <h1 className="housing-title">{title}</h1>
      <div className='loc-&-author'>
        <p className="location">{location}</p>
        <p className="author">{author}</p>
      </div>
    </div>
  );
}

export default TitleLocationAuthor;
