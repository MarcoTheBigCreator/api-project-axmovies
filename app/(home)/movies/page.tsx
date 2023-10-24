import { MovieCover } from './components/MovieCover';
export default function Movies() {
    return (
        <>
            <div className='2xl:mx-20'>
                <h3 className='text-3xl font-semibold tracking-tight border-b'>Movies</h3>
                <div className='bg-background'>
                    <MovieCover />
                </div>
            </div>
        </>
    )
}