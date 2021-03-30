import React from 'react';
import './style.css';

const produtosItem = (color, h2, src, alt) => {
  const className = `produtos-item ${color}`; 
  return (
    <div className={className}>
      <h2>{h2}</h2>
      <img src={src} alt={alt}/>
    </div>
  )
}

const Produtos = () => {
  return (
    <section className="produtos" id="produtos">
      <h1>Produtos</h1>
      <div className="produtos-container">
        {produtosItem('purple', 'Purple', 'img/produto1.jpg', 'Produtos 1')}
        {produtosItem('pink', 'Pink', 'img/produto2.jpg', 'Produtos 2')}
        {produtosItem('blue', 'Blue', 'img/produto3.jpg', 'Produtos 3')}
      </div>
    </section>
  );
}

export default Produtos;