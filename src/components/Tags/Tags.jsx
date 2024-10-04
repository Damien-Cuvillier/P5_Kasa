// Importation de la bibliothèque React
import React from 'react';

// Importation du fichier de styles pour les tags
import './Tags.scss';

// Définition du composant fonctionnel Tags qui accepte une prop 'tags'
function Tags ({tags}) {
    return (
        // Conteneur pour les tags avec la classe CSS 'tags'
        <div className="tags">
            {tags.map((tag, index) => (
                // Pour chaque tag, on crée un élément <span> avec la classe 'button'
                // L'attribut key est défini à 'index' pour identifier chaque élément de manière unique
                <span key={index} className="button">{tag}</span>
            ))}
        </div>
    );
}

// Exportation du composant Tags pour pouvoir l'utiliser dans d'autres parties de l'application
export default Tags;
