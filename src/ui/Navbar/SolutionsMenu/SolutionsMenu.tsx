import Link from "next/link";
import "./SolutionsMenu.scss";
import React, { SetStateAction } from "react";

interface PropsType {
  setIsMenuIntercepted: React.Dispatch<SetStateAction<boolean>>,
  isMenuIntercepted: boolean
}

export default function SolutionsMenu({ setIsMenuIntercepted, isMenuIntercepted }: PropsType) {
  return (
    <ul 
      className={`solutions-menu${isMenuIntercepted ? " show" : ""}`}
    >
      <li onClick={() => {if (isMenuIntercepted) setIsMenuIntercepted(false)}}><Link href="/solutions/roll-up">Roll-up</Link></li>
      <li onClick={() => {if (isMenuIntercepted) setIsMenuIntercepted(false)}}><Link href="/solutions/direct-printing">Stampa diretta</Link></li>
      <li onClick={() => {if (isMenuIntercepted) setIsMenuIntercepted(false)}}><Link href="/solutions/digital-printing">Stampa digitale</Link></li>
      <li onClick={() => {if (isMenuIntercepted) setIsMenuIntercepted(false)}}><Link href="/solutions/stand">Espositori</Link></li>
    </ul>
  )
}
