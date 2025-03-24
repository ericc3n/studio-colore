"use client";

import Link from "next/link";
import "./Navbar.scss";
import SolutionsMenu from "./SolutionsMenu/SolutionsMenu";
import { useState, useEffect, useRef } from "react";
import useResize from "@/hooks/useResize";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const MOBILE_SCREEN = 900;

export default function Navbar() {
  const [isMenuIntercepted, setIsMenuIntercepted] = useState<boolean>(false);
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(window.innerWidth < MOBILE_SCREEN);
  const [isDropMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  const navRef = useRef<HTMLUListElement | null>(null); // Reference for nav-elements

  // Update mobile screen state on resize
  useResize(MOBILE_SCREEN, setIsMobileScreen);

  // Close dropdown menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMenuOpened(false);
      }
    }

    if (isDropMenuOpened) {
      document.addEventListener("click", handleClickOutside);
    }
    
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isDropMenuOpened]);

  return (
    <nav>
      <img src="/favicon.png" alt="fav-icon" height={32} className="logo" />
      <div className="nav-container">
        {isMobileScreen && (
          <span
            className="drop-menu-button"
            onClick={() => setIsMenuOpened((prev) => !prev)}
          >
            {isDropMenuOpened ? <IoMdClose className="icon" /> : <IoMdMenu className="icon" />}
          </span>
        )}
        <ul ref={navRef} className={`nav-elements${isDropMenuOpened ? " show" : ""}`}>
          <li onClick={() => {setIsMenuOpened(false)}}><Link href="/">Home</Link></li>
          <li 
            className="container" 
            onMouseEnter={() => setIsMenuIntercepted(true)}
            onMouseLeave={() => setIsMenuIntercepted(false)}
          >
            <span>Soluzioni</span>
            <SolutionsMenu setIsMenuIntercepted={setIsMenuIntercepted} isMenuIntercepted={isMenuIntercepted} />
          </li>
          <li onClick={() => {setIsMenuOpened(false)}}><Link href="/testimonials">Testimonianze</Link></li>
          <li onClick={() => {setIsMenuOpened(false)}}><Link href="/contatti">Contatti</Link></li>
        </ul>
      </div>
    </nav>
  );
}
