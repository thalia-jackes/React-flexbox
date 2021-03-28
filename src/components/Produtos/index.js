import React from 'react';
import './style.css';

function Produtos(){
  return (
    <section className="produtos" id="produtos">
      <h1>Produtos</h1>
      <div className="produtos-container">
        <div className="produtos-item purple">
          <h2> Purple</h2>
          <img src="img/sobre4.jpg" alt=" Produtos 1"/>
        </div>
        <div className="produtos-item pink">
          <h2> Pink</h2>
          <img src="img/sobre3.jpg" alt=" Produtos 2"/>
        </div>
        <div className="produtos-item blue">
          <h2> Blue</h2>
          <img src="img/sobre2.jpg" alt=" Produtos 3"/>
        </div>
      </div>
    </section>
  );
}

export default Produtos;