import Link from "next/link";
import "./SolutionsMenu.scss";
import React, { SetStateAction } from "react";

interface PropsType {
  setIsDropMenuOpened: React.Dispatch<SetStateAction<boolean>>,
  setIsMenuIntercepted: React.Dispatch<SetStateAction<boolean>>,
  isMenuIntercepted: boolean
}

export default function SolutionsMenu({ setIsDropMenuOpened, setIsMenuIntercepted, isMenuIntercepted }: PropsType) {
  const closeMenu = (): void => {
    if (isMenuIntercepted) {
      setIsMenuIntercepted(false)
      setIsDropMenuOpened(false)
    }
  }
  return (
    <ul 
      className={`solutions-menu${isMenuIntercepted ? " show" : ""}`}
    >
      <li onClick={closeMenu}><Link href="/solutions/roll-up">Roll-up</Link></li>
      <li onClick={closeMenu}><Link href="/solutions/direct-printing">Stampa diretta</Link></li>
      <li onClick={closeMenu}><Link href="/solutions/digital-printing">Stampa digitale</Link></li>
      <li onClick={closeMenu}><Link href="/solutions/stand">Espositori</Link></li>
    </ul>
  )
}
