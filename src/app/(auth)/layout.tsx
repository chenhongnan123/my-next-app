"use client"
import { useState } from 'react'
import Link from 'next/link'
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [input, setInput] = useState('') 
  return (
   <>
    <h1>Auth</h1>
    <input value={input} onChange={(e) => {setInput(e.target.value)}}/>
    <Link href={'/login'}>go login</Link>
    <Link href={'/register'}>go register</Link>
    <Link href={'/forgot-password'}>go forgot-password</Link>
    {children}
   </>
  )
}
