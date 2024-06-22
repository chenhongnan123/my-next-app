"use client"
import { notFound } from "next/navigation"
export default function reviewDetail({ params }: {
    params: {
        productId: string,
        reviewId: string,
    }
}) {
    function getRandomInt(count: number) {
        return Math.floor(Math.random() * count)
    }

    if (+params.reviewId > 1000) {
        notFound()
    }
    if (getRandomInt(2) === 1) {
        throw new Error('Error loading review')
    }

    return <h1>Review id {params.reviewId} of product id {params.productId}</h1>
}