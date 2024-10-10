import React from 'react';
import './Tags.scss';

// Définition du composant fonctionnel Tags avec une prop 'tags'
function Tags ({tags}) {
    return (
        <div className="tags">
            {tags.map((tag, index) => (
                // Pour chaque tag, on crée un élément <span> avec la classe 'button'
                // L'attribut key est défini à 'index' pour identifier chaque élément de manière unique
                <span key={index} className="button">{tag}</span>
            ))}
        </div>
    );
}

export default Tags;
