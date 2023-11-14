import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Sign in",
    description: "Sign in to Axmovies.",
}

export default function layout({ children }: { children: React.ReactNode }) {

    return (
        <>
        {children}
        </>
    )
}