import React from 'react';
import './style.css'

const sobreImg = (src, alt) => {
  return (
    <div className="sobre-img">
      <img src={src} alt={alt}/>
    </div>
  )
}

const Sobre = () => {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-info">
        <h1>Sobre</h1>
          <p> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Explicabo recusandae sequi veritatis minima veniam laborum, 
            molestiae, ipsum inventore sit esse mollitia vel corrupti velit,
            ullam impedit dignissimos dolorum voluptate fuga.
          </p>
          <br/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Explicabo recusandae sequi veritatis minima veniam laborum, 
            molestiae, ipsum inventore sit esse mollitia vel corrupti velit,
            ullam impedit dignissimos dolorum voluptate fuga.
          </p>
      </div>
      {sobreImg("img/sobre1.jpg", "Sobre 1")}
      {sobreImg("img/sobre2.jpg", "Sobre 2")}
    </section>
  );
}  

export default Sobre;