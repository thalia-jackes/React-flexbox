import React from 'react';
import './style.css';

function Newsletter(){
  return(
    <section className="newsletter">
      <div className="newsletter-info">
        <h1> Newsletter</h1>
        <p> Assine e fique por dentro das novidades </p>
      </div>
    <form className="newsletter-form">
      <input type="text" placeholder="Seu e-mail"/>
      <button type="submit">Assinar</button>
    </form>
    </section>
  );
}

export default Newsletter; 