import React from 'react';
import './Tags.scss'
function Tags ({tags}) {
    return (
        <div className="tags">
            {tags.map((tag, index) => (
        <span key={index} className="button">{tag}</span>
      ))}
        </div>
    )
}

export default Tags