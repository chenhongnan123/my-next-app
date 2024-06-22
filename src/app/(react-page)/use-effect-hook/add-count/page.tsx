"use client"
import { useState, useEffect } from 'react';

export default function AddCounter() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  console.log('init')
  useEffect(() => {
    console.log('created effect')
    const intervalId = setInterval(() => {
      setCount(c => {
        console.log(c)
        return c + 1
      }); // ✅ 传递一个 state 更新器
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); // ✅现在 count 不是一个依赖项
  useEffect(() => {
    console.log('created effect')
    const intervalId = setInterval(() => {
        setNumber(n => {
        console.log(n)
        return n + 1
      }); // ✅ 传递一个 state 更新器
    }, 1000);
    return () => clearInterval(intervalId);
  }, []); // ✅现在 count 不是一个依赖项

  return <>
    <h1>{count}</h1>
    <h1>{number}</h1>
  </>
}
