import Link from 'next/link'

export default function Review() {
    const reviewId = 100
    return <>
        <h1>Review Page</h1>
        <Link href='/'>home</Link>
        <h1><Link href="reviews/1">review1</Link></h1>
        <h1><Link href="reviews/2">review2</Link></h1>
        <h1><Link href={`reviews/${reviewId}`} replace>review3</Link></h1>
    </>
}