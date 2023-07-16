import { Icons } from '@/components/Icons'
import { Avatar, AvatarFallback } from '@/components/ui/Avatar'
import { AvatarProps } from '@radix-ui/react-avatar'
import { User } from 'next-auth'
import Image from 'next/image'
import React from 'react'

type UserAvatarProps = AvatarProps & {
  user: Pick<User, 'name' | 'image'>
}
const UserAvatar = ({ user, ...props }: UserAvatarProps) => {
  return (
    <Avatar {...props}>
      {!!user.image ? (
        <Image fill src={user.image} alt='profile picture' />
      ) : (
        <AvatarFallback>
          {user.name} <Icons.logo className='h-4 w-4' />
        </AvatarFallback>
      )}
    </Avatar>
  )
}

export default UserAvatar
