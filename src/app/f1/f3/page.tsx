import Link from 'next/link'

export default function F3() {
  return <>
    <h1>F3</h1>
    <Link href="/f1/f2">F2</Link><br />
    <Link href="/f1">F1</Link>
    <Link href="/about">About</Link>
  </>
}