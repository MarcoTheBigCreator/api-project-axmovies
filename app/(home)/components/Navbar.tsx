import { UserDropdown } from './UserDropdown';
import { MainNav } from './MainNav';
import { Card } from '@/components/ui/card';


export const  Navbar = () => {

    return (
        <>
            <Card className='flex h-16 mt-8 items-center px-4'>
                <span className='mr-10 hidden md:block text-green-700 font-medium text-lg'>Axbooks</span>
                <MainNav className='mx-6' />
                <div className='ml-auto flex items-center space-x-4'>
                    <UserDropdown />
                </div>
            </Card>
        </>
    )
}