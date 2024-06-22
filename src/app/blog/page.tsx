import { Metadata } from 'next'

export const metadata: Metadata = {
    title: {
        absolute: '',
        default: 'blog'
    }
}

export default function Blog() {
    return <h1>My Blog</h1>
}