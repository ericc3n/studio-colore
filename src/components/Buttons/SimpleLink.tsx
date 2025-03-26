import Link from 'next/link'
import React from 'react'

interface PropsType {
  href: string,
  children: string
}

export default function SimpleLink({ href, children }: PropsType) {
  return (
    <Link className="simple-link" href={href}>{children}</Link>
  )
}
