import { Icons } from '@/components/Icons'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 inse-x-0 h-fit w-full bg-zinc-100 border-zinc-500 z-[10] py-2'>
      <div className='container max-w-7xl  h-full mx-0 flex items-center justify-between  gap-2'>
        <Link href='/' className='flex gap-2 items-center'>
          <Icons.logo className='h-6 w-6 sm:h-8 sm:w-8' />
          <p className='hidden text-zinc-700 text-sm font-medium sm:block'>
            Breadit
          </p>
        </Link>
        {/* search bar */}
      </div>
    </div>
  )
}

export default Navbar
