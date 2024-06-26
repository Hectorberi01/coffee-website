// src/components/DetailedMenuSection.tsx
import React from 'react';
import './DetailedMenuSection.css';

const menuData = [
  {
    category: 'Sommeilthé',
    items: [
      { name: 'Thé Blanc aux Fleurs de Lavande', price: '7.0€' },
      { name: 'Thé Oolong à la Camomille', price: '6.0€' },
      { name: 'Thé Rouge à la Passiflore', price: '6.5€' },
      { name: 'Thé Noir Infusé à la Camomille', price: '7.0€' },
    ],
  },
  {
    category: 'Digesthé',
    items: [
      { name: 'Thé Vert au Gingembre et à la Menthe', price: '5.5€' },
      { name: 'Thé Blanc à la Pomme et à la Cannelle', price: '6.0€' },
      { name: 'Thé vert à la moringa et au Citron Vert', price: '6.5€' },
      { name: 'Thé Noir à la Cardamome et à la Vanille', price: '6.5€' },
    ],
  },
  {
    category: 'Detenthé',
    items: [
      { name: 'Thé Blanc à la verveine', price: '5.0€' },
      { name: 'Thé D’hibiscus a la menthe', price: '5.5€' },
      { name: 'Thé Oolong à la Passiflore', price: '6.0€' },
      { name: 'Thé Rouge à la mélisse', price: '6.5€' },
    ],
  },
  {
    category: 'Boosthé',
    items: [
      { name: 'Thé Vert au Gingembre et à la Citronnelle', price: '5.5€' },
      { name: 'Thé Noir à l\'Acerola', price: '6.5€' },
      { name: 'Thé Matcha Maté', price: '7.0€' },
      { name: 'Thé Fumé au Thé Sombré', price: '7.5€' },
    ],
  },
  {
    category: 'Freshthé',
    items: [
      { name: 'Thé Vert à la Mangue et à la Menthe', price: '8.0€' },
      { name: 'Thé Blanc à la Pêche et aux Fleurs d\'Hibiscus', price: '7.0€' },
      { name: 'Thé Oolong à la Citronnelle et au Gingembre', price: '7.5€' },
      { name: 'Thé Noir à la Fraise et à la Menthe', price: '8.0€' },
      { name: 'Thé Rooibos à la Vanille et à la Lavande', price: '7.5€' },
    ],
  },
  {
    category: 'Soda',
    items: [
      { name: 'Strawberry soda', price: '3.5€' },
      { name: 'Blueberry soda', price: '3.0€' },
      { name: 'Kiwi soda', price: '3.5€' },
      { name: 'Mixed berry soda', price: '3.5€' },
      { name: 'Coca-Cola', price: '2.0€' },
    ],
  },
  {
    category: 'Café',
    items: [
      { name: 'Americano', price: '3.0€' },
      { name: 'Cappuccino', price: '3.5€' },
      { name: 'Espresso', price: '4.0€' },
      { name: 'Dirty', price: '5.0€' },
      { name: 'Coffeee', price: '2.5€' },
      { name: 'Latte', price: '4.0€' },
      { name: 'Macchiato Mocha', price: '4.0€' },
    ],
  },
  {
    category: 'Sucrés',
    items: [
      { name: 'Donuts Chocolat , pistache, caramel', price: '5€' },
      { name: 'Gateau marbré', price: '6€' },
      { name: 'Les rolls : cannelle , sucre', price: '7€' },
      { name: 'Brownie', price: '5€' },
      { name: 'Muffins : cassis , citron , beurre de cacahuète', price: '6€' },
      { name: 'Cookies : matcha , bissap , rhum résin , groseille', price: '4€' },
      { name: 'Sconne britannique : vanille , fleur d\'oranger', price: '5€' },
      { name: 'Macaron géant : mure , vanille , fraise', price: '4€' },
      { name: 'Cornes de gazelle amande', price: '5€' },
      { name: 'Trio de pancakes nutella ou sirop d\'érable', price: '8€' },
      { name: 'Mille trou miel beurre', price: '5€' },
    ],
  },
  {
    category: 'Salés',
    items: [
      { name: 'Pancakes saumon avocat', price: '9€' },
      { name: 'Quiches poulet , saumon , épinard', price: '9€' },
      { name: 'Brioche salé aux herbes', price: '8€' },
      { name: 'Duo samoussa végie , viande hachée , thon', price: '8€' },
      { name: 'Beignet haricots', price: '7€' },
      { name: 'Cake salé légumes , oeuf', price: '8€' },
    ],
  },
];

const DetailedMenuSection: React.FC = () => {
  return (
    <section className="detailed-menu-section">
      <h2>Menu</h2>
      <div className="menu-grid">
        {menuData.map((category) => (
          <div key={category.category} className="menu-card">
            <h3>{category.category}</h3>
            <ul>
              {category.items.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <span>{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailedMenuSection;
