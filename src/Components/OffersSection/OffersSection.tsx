// src/components/OffersSection.tsx
import React from 'react';
//import '../Style/style.css'
import './OffersSection.css';

function OffersSection(){
  const offers = [
    { id: 1, title: 'Types de café', description: 'Variétés et types de café.', icon: '/images/offre1.png' },
    { id: 2, title: 'Variétés de haricots', description: 'Différentes variétés de haricots.', icon: '/images/offre1.png' },
    { id: 3, title: 'Café et pâtisserie', description: 'Dégustez avec des pâtisseries.', icon: '/images/offre1.png'},
   // { id: 4, title: 'Café à emporter', description: 'Café à emporter.', icon: 'coffeeToGoIcon' },
  ];

  return (
    <section className="offers">
      <h2>Notre délicieuse offre</h2>
      <div className="offer-items">
        {offers.map((offer) => (
          <div key={offer.id} className="offer-item">
            <img src={offer.icon} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
            <button>Order Now</button>
          </div>
        ))}
      </div>
      <p>
        J'espère vous voir au salon Savor Seattle en novembre ! Si vous souhaitez visiter mon stand,
        veuillez cliquer ici pour obtenir l'adresse.
      </p>
    </section>
  );
};

export default OffersSection;
