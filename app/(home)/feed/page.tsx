import { ReviewCard } from './components/ReviewCard';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "My Feed",
    description: "Axbooks reviews of books.",
}

export default function Feed() {

    return (
        <>
            <ReviewCard />
        </>
    )
}