import React from 'react';
import "./Hero.scss";
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="hero section">
      <div className="text-content">
        <h3 className="semi-title">Grafica e Stampe</h3>
        <h1>Soluzioni ideali per ogni esigenza visiva</h1>
        <p className='my-l'>Diamo vita alle tue idee con stampe di qualità, perfette per eventi, promozioni e allestimenti. Offriamo un servizio su misura per valorizzare la tua comunicazione.</p>
        <Link className="btn-1" href="/contacts">Contatta</Link>
      </div>
      <div className="side-content">
        <img src="/graphic-image.jpg" alt="hero-image" />
        <ul className='business-info'>
          <li>+1000 clienti</li>
          <li className='separator'>|</li>
          <li>Dal 1991</li>
        </ul>
      </div>
    </div>
  )
}
