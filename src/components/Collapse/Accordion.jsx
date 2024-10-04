// Importation de la bibliothèque React et du hook useState
import React, { useState } from 'react';
// Importation de l'icône FontAwesome pour l'angle vers le haut
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
// Importation des styles SCSS pour le composant Accordion
import './Accordion.scss';

// Définition du composant fonctionnel Accordion
function Accordion({ title, content, isList }) {
  // État pour contrôler l'ouverture ou la fermeture de l'accordéon
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état ouvert/fermé
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      {/* En-tête de l'accordéon cliquable pour ouvrir/fermer */}
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
        {/* Affichage de l'icône de l'accordéon, change de classe selon l'état */}
        <FontAwesomeIcon
          className={`accordion-icon ${isOpen ? 'open' : ''}`}
          icon={faAngleUp}
        />
      </div>
      {/* Contenu de l'accordéon affiché selon l'état ouvert/fermé */}
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {isList ? (
          // Si isList est vrai, affiche le contenu sous forme de liste
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          // Sinon, affiche le contenu comme un paragraphe
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

// Exportation du composant Accordion pour pouvoir l'utiliser dans d'autres parties de l'application
export default Accordion;
