// src/components/Header.tsx
import React from 'react';
import '../Style/style.css'

function Header(){
  return (
    <header>
      <nav>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/home'>Shop</a></li>
          <li><a href='/Blog'>Blog</a></li>
          <li><a href='/aboutsus'>About Us</a></li>
          <li><a href='/Contact'>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
