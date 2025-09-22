import Link from 'next/link'
import NavLinks from '@/app/ui/dashboard/nav-links'
import AcmeLogoWrapper from '@/app/ui/acme-logo-wrapper'
import { PowerIcon } from '@heroicons/react/24/outline'

export default function SideNav() {
  return (
    <div className='flex h-full flex-col px-3 py-4 md:px-2'>
      <Link className='mb-3 md:mb-2' href='/'>
        <AcmeLogoWrapper />
      </Link>
      <div className='flex grow space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
        <NavLinks />
        <div className='hidden grow rounded-md bg-gray-50 md:block'></div>
        <form>
          <button className='flex h-12 w-full items-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600'>
            <PowerIcon className='w-6' />
            <div className='hidden md:block'>Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  )
}
