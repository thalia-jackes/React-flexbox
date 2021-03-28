import React from 'react';
import './style.css'

function Header(props) {
  return (
    <header className="menu-bg">
      <div className="menu">
        <div className="menu-logo">
          <a href="#"> Home </a>
        </div>
        <nav className="menu-nav">
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#preco"> Preço</a></li>
            <li><a href="#qualidade">Qualidade</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}


export default Header;
