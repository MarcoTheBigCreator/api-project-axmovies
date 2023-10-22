import { UserDropdown } from './components/UserDropdown';
import { MainNav } from './components/MainNav';
import { ReviewCard } from './components/ReviewCard';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Card } from '@/components/ui/card';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "My Feed",
    description: "Axbooks reviews of books.",
  }

export default function Feed() {
    
    return (
        <>
            <div className='mx-60'>
                <div className='hidden flex-col md:flex'>
                    <div>
                        <Card className='flex h-16 mt-8 items-center px-4'>
                            <span className='mr-10 hidden md:block text-green-700 font-medium text-lg'>Axbooks</span>
                            <MainNav className='mx-6' />
                            <div className='ml-auto flex items-center space-x-4'>
                                <UserDropdown />
                            </div>
                        </Card>
                    </div>
                </div>
                <div className='mt-10'>
                    <ReviewCard />
                </div>
            </div>


        </>
    )
}