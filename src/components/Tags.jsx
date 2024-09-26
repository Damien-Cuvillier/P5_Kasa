import React from 'react';
import './Tags.scss'
function Tags ({tags}) {
    return (
        <div className="tags">
            {tags.map((tag, index) => (
        <button key={index} className="button">{tag}</button>
      ))}
        </div>
    )
}

export default Tags