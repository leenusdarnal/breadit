'use client'

import UserAvatar from '@/components/UserAvatar'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { ImageIcon, Link2 } from 'lucide-react'
import { Session } from 'next-auth'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'

const MiniCreatePost = ({ session }: { session: Session | null }) => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <li className='overflow-hidden rounded-md bg-white shadow list-none'>
      <div className='h-full px-6 py-4 sm:flex sm:justify-between gap-6'>
        <div className='relative pb-2 sm:pb-0'>
          <UserAvatar
            user={{
              name: session?.user.name || null,
              image: session?.user.image,
            }}
          />
          <span className='absolute bottom-0 right-0 rounded-full w-3 h-3 bg-green-500 outline outline-2 outline-white mb-2 sm:mb-0' />
        </div>
        <Input
          readOnly
          onClick={() => router.push(pathname + '/submit')}
          placeholder='Create post'
        />
        <Button
          variant='ghost'
          onClick={() => router.push(pathname + '/submit')}
        >
          <ImageIcon />
        </Button>
        <Button
          variant='ghost'
          onClick={() => router.push(pathname + '/submit')}
        >
          <Link2 className='text-zinc-600' />
        </Button>
      </div>
    </li>
  )
}

export default MiniCreatePost
