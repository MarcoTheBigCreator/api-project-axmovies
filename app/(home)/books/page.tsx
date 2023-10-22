import { BookCover } from './components/BookCover';
export default function Books() {
    return (
        <>
            <h3 className='text-3xl font-semibold tracking-tight'>Books</h3>
            <div className='bg-background border-t'>
                <BookCover />
            </div>
        </>
    )
}