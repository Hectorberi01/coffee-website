// src/components/MenuSection.tsx
import React from 'react';
import '../../Style/style.css'
import './MenuSection.css';



function MenuSection(){
  const menuItems = [
    { id: 1, name: 'Café Americano', price: 25, image: '/images/americano.png' },
    { id: 2, name: 'Virgin Coffee Greed', price: 22, image: '/images/virgin-coffee.png'},
    { id: 3, name: 'Café torréfié italien', price: 25, image: '/images/italian-roasted.png' },
    { id: 4, name: "L'avidité du Japon pour le café", price: 12, image: '/images/japan-coffee.png' },
    { id: 5, name: 'Café torréfié brésilien', price: 35, image: '/images/brazilian-roasted.png'},
    { id: 6, name: 'Meilleur Latte Macchiato', price: 25, image:'/images/latte-macchiato.png'},
    { id: 7, name: 'Meilleur Latte Macchiato', price: 25, image:'/images/latte-macchiato.png'},
    { id: 8, name: 'Café torréfié italien', price: 25, image: '/images/italian-roasted.png' },
  ];
  return (
    <section className="menu">
      <h2>Interdiction d'un menu populaire</h2>
      <p>Nous produisons des mélanges de café des plus aromatiques.</p>
      <div className="menu-items">
        {menuItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} />
            <p>{item.name} - ${item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
