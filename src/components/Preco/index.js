import React from 'react';
import './style.css';

function Preco(){
  return(
    <section className="preco" id="preco">
      <div className="preco-item">
        <h2> Cobre </h2>
        <span> <sup>R$</sup> 19 </span>
        <ul>
          <li> Planos Ilimitados</li>
          <li> Acesso restrito</li>
          <li> Conteudo Secreto</li>
          <li> Suporte 24h</li>
        </ul>  
        <a href="#"> Comprar </a>
    </div>
    <div className="preco-item">
      <h2> Prata </h2>
      <span> <sup>R$</sup> 39 </span>
      <ul>
        <li> Planos Ilimitados</li>
        <li> Acesso restrito</li>
        <li> Conteudo Secreto</li>
        <li> Suporte 24h</li>
        <li> Compra exclusiva </li>
      </ul>  
      <a href="#"> Comprar </a>
    </div>
    <div className="preco-item">
      <h2> Ouro </h2>
      <span> <sup>R$</sup> 79 </span>
      <ul>
        <li> Planos Ilimitados</li>
        <li> Acesso restrito</li>
        <li> Conteudo Secreto</li>
        <li> Suporte 24h</li>
        <li> Compra exclusiva </li>
        <li> Download dos Itens </li>
      </ul>  
      <a href="#"> Comprar </a>
    </div>
    </section>
  );
}

export default Preco; 