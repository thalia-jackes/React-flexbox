import React from 'react';
import './style.css'

function Sobre() {
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
      <div className="sobre-img">
        <img src="img/sobre1.jpg" alt="Sobre 1"/>
      </div>
      <div className="sobre-img">
        <img src="img/sobre2.jpg" alt="Sobre 2"/>
      </div>
    </section>
  );
}  

export default Sobre;