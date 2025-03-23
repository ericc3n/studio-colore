import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <nav>
      <img src="/favicon.png" alt="fav-icon" height={32} />
      <ul>
        <li><Link href="/">Home</Link></li>
        {/* fare menu a tendina */}
        <li><Link href="/solutions">Soluzioni</Link> <IoIosArrowForward style={{ verticalAlign: "middle" }} /></li>
        <li><Link href="/testimonials">Testimonianze</Link></li>
        <li><Link href="/contatti">Contatti</Link></li>
      </ul>
    </nav>
  )
}
