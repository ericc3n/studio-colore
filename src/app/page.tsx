import Link from "next/link";

export default function page() {
  return (
    <div>
      <h1>Bella pupa</h1>
      <button className="btn-1">Scopri</button>
      <Link href="./" className="btn-1">Scopri</Link>
    </div>
  )
}
