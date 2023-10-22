import { BookCover } from './components/BookCover';
export default function Books() {
    return (
        <>
            <div className='mx-20'>
                <h3 className='text-3xl font-semibold tracking-tight border-b'>Books</h3>
                <div className='bg-background'>
                    <BookCover />
                </div>
            </div>
        </>
    )
}