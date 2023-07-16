'use client'

import UserAvatar from '@/components/UserAvatar'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu'
import { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

type UserAccountNavProps = {
  user: Pick<User, 'name' | 'email' | 'image'>
}

const UserAccountNav = ({ user }: UserAccountNavProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar user={user} className='h-8 w-8' />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='bg-white' align='end'>
        <div className='flex items-center justify-start gap-2 p-2'>
          <div className='flex flex-col space-y-1 leading-none'>
            {user.name && <p className='font-medium'>{user.name}</p>}
            {user.email && (
              <p className='w-[200px] truncate text-sm text-zinc-600'>
                {user.email}
              </p>
            )}
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href='/'>Feed</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href='/r/create'>Create community</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href='/settings'>Settings</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem
          className='cursor-pointer'
          onSelect={(event) => {
            event.preventDefault()
            signOut({
              callbackUrl: `${window.location.origin}/sign-in`,
            })
          }}
        >
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountNav
