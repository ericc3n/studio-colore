"use client";

import { FaImage, FaPaintBrush, FaPortrait, FaScroll } from "react-icons/fa";
import "./ServicesSection.scss";
import { useRouter } from "next/navigation";

export default function ServicesSection() {
  const router = useRouter();
  return (
    <div className="our-services section">
      <div className="text-content">
        <h3 className="semi-title">I nostri Servizi</h3>
        <h2>Soluzioni su misura per ogni esigenza</h2>
      </div>
      <div className="cards my-xl">
        <div className="card" onClick={() => {router.push("/solutions/roll-up")}}>
          <div className="icon"><FaScroll/></div>
          <h3>Roll-up</h3>
          <p>Strutture leggere e facili da montare per eventi e fiere</p>
        </div>
        <div className="card" onClick={() => {router.push("/solutions/direct-printing")}}>
          <div className="icon"><FaPaintBrush /></div>
          <h3>Stampa diretta</h3>
          <p>Personalizza materiali rigidi con stampe nitide e resistenti</p>
        </div>
        <div className="card" onClick={() => {router.push("/solutions/digital-printing")}}>
          <div className="icon"><FaImage /></div>
          <h3>Stampa digitale</h3>
          <p>Soluzioni rapide e versatili per piccole e grandi tirature</p>
        </div>
        <div className="card" onClick={() => {router.push("/solutions/stand")}}>
          <div className="icon"><FaPortrait /></div>
          <h3>Espositori</h3>
          <p>Supporti personalizzati per migliorare la visibilità del tuo brand</p>
        </div>
      </div>
    </div>
  )
}
