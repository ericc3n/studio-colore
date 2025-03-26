import Link from 'next/link'
import React from 'react'

interface PropsType {
  href: string
}

export default function SimpleLink({ href }: PropsType) {
  return (
    <Link className="simple-link" href={href}>Scopri di più</Link>
  )
}
