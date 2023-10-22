import { Navbar } from './components/Navbar';

export default function layout({ children }: { children: React.ReactNode }) {

    return (
        <>
            <div className='mx-60'>
                <div className='hidden flex-col md:flex'>
                    <div>
                        <Navbar />
                    </div>
                </div>
                <div className='mt-10'>
                    {children}
                </div>
            </div>
        </>


    )

}