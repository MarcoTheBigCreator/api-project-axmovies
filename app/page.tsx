'use client';
import { MovieCover } from './components/MovieCover';
import { AddMovieSheet } from './components/AddMovieSheet';
import { useSession } from 'next-auth/react';
import { Navbar } from './components/Navbar';
import { redirect } from 'next/navigation'

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  })

  return (
    <>
      <div className='mx-40'>
        <div className='hidden flex-col md:flex'>
          <div>
            <Navbar />
          </div>
        </div>
        <div className='mt-10'>
          <div className='2xl:mx-52'>
            <div className='w-full flex flex-col md:flex-row md:justify-between md:items-center mb-4'>
              <h3 className='text-3xl font-semibold tracking-tight'>Movies</h3>
              <AddMovieSheet></AddMovieSheet>
            </div>
            <div className='bg-background border-t'>
              <MovieCover />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
Home.requireAuth = true