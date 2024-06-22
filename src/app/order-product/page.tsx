
"use client"
import './styles.css'
import { useRouter } from 'next/navigation'
export default function OrderProduct() {
  const router = useRouter()
  return <>
    <h1>Order Product</h1>
    <div className="mb-10">product1</div>
    <div>product2</div>
    <button onClick={() => { router.push('/') }}>go home</button>
  </>
}