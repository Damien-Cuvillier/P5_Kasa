import React from 'react';

function Rating ({rating}) {
    return (
        <div className="rating">
        {Array.from({ length: rating }, (_, index) => (
          <span key={index} className="star">⭐</span>
        ))}
      </div>
    )
}
export default Rating