import React from 'react';
import './style.css';

const qualidadeItems = [
  {
    titulo: 'Inteligente',
    conteudo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ab veritatis adipisci, explicabo quod quidem, optio sequi.`,
  },
  {
    titulo: 'Compacto',
    conteudo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ab veritatis adipisci, explicabo quod quidem, optio sequi. Doloremque ab veritatis adipisci, explicabo quod quidem, optio sequi.` 
  },
  {
    titulo: 'Econômico',
    conteudo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ab veritatis adipisci, explicabo quod quidem, optio sequi.` 
  },
  {
    titulo: 'Transparente',
    conteudo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ab veritatis adipisci, explicabo quod quidem, optio sequi.` 
  },
  {
    titulo: 'Opaco',
    conteudo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ab veritatis adipisci, explicabo quod quidem, optio sequi.
      Doloremque ab veritatis adipisci, explicabo quod quidem, optio sequi.`,
  },
  {
    titulo: 'Sustentável',
    conteudo: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ab veritatis adipisci, explicabo quod quidem, optio sequi.` 
  },
]

const qualidadeItem = (titulo, conteudo) =>{
  return(
    <div className="qualidade-item">
      <h2>{titulo}</h2>
      <p>{conteudo}</p>
    </div>
  )
}

const Qualidade = () => {
  return(
    <section className="qualidade" id="qualidade">   
      {qualidadeItems.map((item) => {
        return (qualidadeItem(item.titulo, item.conteudo))
      })}
    </section>
  );
}

export default Qualidade; 