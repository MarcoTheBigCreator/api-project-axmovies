import { ReviewCard } from './components/ReviewCard';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "My Feed",
    description: "Axmovies reviews of movies.",
}

export default function Feed() {

    return (
        <>
            <div className='2xl:mx-52'>
                <h3 className='text-3xl font-semibold tracking-tight border-b'>Reviews</h3>
                <div className='2xl:mx-5'>
                <ReviewCard />
                </div>
            </div>

        </>
    )
}