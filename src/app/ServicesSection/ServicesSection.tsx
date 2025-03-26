"use client";

import { FaChevronRight, FaImage, FaPaintBrush, FaPortrait, FaScroll } from "react-icons/fa";
import "./ServicesSection.scss";
import SimpleLink from "@/components/Buttons/SimpleLink";
import Link from "next/link";

export default function ServicesSection() {
  return (
    <div className="our-services">
      <div className="text-content">
        <h2>I nostri servizi</h2>
      </div>
      <div className="cards my-xl">
        <div className="card">
          <div className="icon">
            <FaScroll />
            <Link href="/solutions/roll-up"><FaChevronRight className="arrow" /></Link>
          </div>
          <h3>Roll-up</h3>
          <p>Strutture leggere e facili da montare per eventi e fiere</p>
        </div>
        <div className="card">
          <div className="icon">
            <FaPaintBrush />
            <Link href="/solutions/direct-printing"><FaChevronRight className="arrow" /></Link>
          </div>
          <h3>Stampa diretta</h3>
          <p>Personalizza materiali rigidi con stampe nitide e resistenti</p>
        </div>
        <div className="card">
          <div className="icon">
            <FaImage />
            <Link href="/solutions/digital-printing"><FaChevronRight className="arrow" /></Link>
          </div>
          <h3>Stampa digitale</h3>
          <p>Soluzioni rapide e versatili per piccole e grandi tirature</p>
        </div>
        <div className="card">
          <div className="icon">
            <FaPortrait />
            <Link href="/solutions/stand"><FaChevronRight className="arrow" /></Link>
          </div>
          <h3>Espositori</h3>
          <p>Supporti personalizzati per migliorare la visibilità del tuo brand</p>
        </div>
      </div>
    </div>
  )
}
