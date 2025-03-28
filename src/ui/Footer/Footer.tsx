"use client";

import React from "react";
import "./Footer.scss";
import LogoBlack from "../LogoBlack/LogoBlack";
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-alice-carousel";
import { IoMdMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import SimpleLink from "@/components/Buttons/SimpleLink";

export default function Footer() {
  return (
    <footer>
      <div className="main">
        <div className="logo-socials">
          <LogoBlack />
          <ul className="socials">
            <li><a href="https://www.instagram.com/stcolore20/" target="_blank"><FaInstagram /></a></li>
            <li><a href="https://www.facebook.com/studiocoloregrafica/" target="_blank"><FaFacebook /></a></li>
          </ul>
        </div>
        <ul className="column">
          <li className="title">Orario</li>
          <li><b>Lavorativi</b>: 8:30 - 13, 14 - 19:30</li>
          <li><b>Sabato</b>: 9 - 13</li>
          <li><b>Domenica</b>: Chiuso</li>
        </ul>
        <ul className="column">
          <li className="title">Pagine</li>
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/testimonials">Testimonianze</Link></li>
          <li><Link href="/contacts">Contatti</Link></li>
          <li><Link href="/home">Home</Link></li>
        </ul>
        <ul className="column">
          <li className="title">Soluzioni</li>
          <li><Link href="/solutions/direct-printing">Stampa diretta</Link></li>
          <li><Link href="/solutions/digital-printing">Stampa digitale</Link></li>
          <li><Link href="/solutions/roll-up">Roll-up</Link></li>
          <li><Link href="/solutions/stand">Espositori</Link></li>
        </ul>
        <ul className="column contacts">
          <div className="title">Contatti</div>
          <li>
            <span className="icon"><FaMapMarkerAlt /></span>
            <span className="text">20081 Abbiategrasso (MI) Via Luigi Cagnola, 35</span>
          </li>
          <li>
            <span className="icon"><IoMdMail /></span>
            <span className="text">info@studiocolori.it</span>
          </li>
          <li>
            <span className="icon"><MdLocalPhone /></span>
            <span className="text">+39 02 94964717</span>
          </li>
        </ul>
      </div>
      <div className="end-line">
        <p className="thin">©STUDIO COLORE GRAFICA DTP & R SRL - P.I. 10313470154</p>
        <SimpleLink href="/privacy-policies">Politiche e Privacy</SimpleLink>
      </div>
    </footer>
  );
}