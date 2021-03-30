import React from 'react';
import './style.css';

const precos = [
  {
    titulo: 'Cobre',
    valor: 19,
    items: [
      'Planos Ilimitados',
      'Acesso restrito',
      'Conteudo Secreto',
      'Suporte 24h'
    ]
  },
  {
    titulo: 'Prata',
    valor: 39,
    items: [
      'Planos Ilimitados',
      'Acesso Restrito',
      'Conteudo Secreto',
      'Suporte 24h'
    ]
  },
  {
    titulo: 'Ouro',
    valor: 79,
    items: [
      'Planos Ilimitados',
      'Acesso Restrito',
      'Conteudo Secreto',
      'Suporte 24h',
      'Compra Exclusiva',
      'Download dos Itens'
    ]
  }
]

const renderPreco = (titulo, valor, items) =>{
  return(
    <div className="preco-item">
      <h2>{titulo}</h2>
      <span> <sup>R$</sup>{valor}</span>
      <ul>
        {items.map((item) => {
          return (
            <li>{item}</li>
          )
        })}
      </ul>  
      <a href="#"> Comprar </a>
    </div>
  );
};

function Preco(){
  return(
    <section className="preco" id="preco">
      {precos.map((preco) => {
        return (renderPreco(preco.titulo, preco.valor, preco.items))
      })}
    </section>
  );
}

export default Preco; 