import { Metadata } from 'next'

type Props = {
    params: {
        productId: string
    }
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`xiaomi ${params.productId}`)
        }, 1000);
    })
    return {
        title: `product ${title}`
    }
}

export default function ProductDetails({ params }: Props) {
    return <h1>Product Detail {params.productId}</h1>
}