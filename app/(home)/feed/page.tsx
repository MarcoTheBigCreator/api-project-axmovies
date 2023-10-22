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
            <div className='mx-20'>
                <h3 className='text-3xl font-semibold tracking-tight border-b'>Reviews</h3>
                <ReviewCard />
            </div>

        </>
    )
}