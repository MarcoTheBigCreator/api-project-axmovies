import { Metadata } from 'next';
import { Navbar } from './components/Navbar';
import { Toaster } from '../../components/ui/toaster';
import SessionProvider from '../SessionProvider';

export const metadata: Metadata = {
    title: "Movies",
    description: "Movies page",
}

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
                    <SessionProvider>
                    {children}
                    </SessionProvider>
                </div>
            </div>
            <Toaster />
        </>


    )

}