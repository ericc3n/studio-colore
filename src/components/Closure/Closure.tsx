import React from 'react';
import Link from 'next/link';

export default function Closure() {
  return (
    <div className="clousure section" style={{ textAlign: "center" }}>
      <h2>Hai un progetto da realizzare?</h2>
      <p>Siamo pronti ad aiutarti</p>
      <Link className="btn-1 my-l" href="/contacts">Contatta</Link>
    </div>
  )
}
