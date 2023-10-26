import { MovieCover } from './components/MovieCover';
import { AddMovieSheet } from './components/AddMovieSheet';

export default function Movies() {
    return (
        <>
            <div className='2xl:mx-52'>
                <div className='w-full flex flex-col md:flex-row md:justify-between md:items-center mb-4'>
                    <h3 className='text-3xl font-semibold tracking-tight'>Movies</h3>
                    <AddMovieSheet></AddMovieSheet>
                </div>
                <div className='bg-background border-t'>
                    <MovieCover />
                </div>
            </div>
        </>
    )
}