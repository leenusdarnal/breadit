'use client'
import { Icons } from '@/components/Icons'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import React, { FC, HTMLAttributes, useState } from 'react'
import { signIn } from 'next-auth/react'
import { LoaderIcon } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

type UserAuthFormProps = HTMLAttributes<HTMLDivElement> & {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const Login = async () => {
    setIsLoading(true)
    try {
      await signIn('github')
    } catch (error) {
      // toast notification
      toast({
        title: 'There was a problem ',
        description: 'There was error with Login',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div {...props} className={cn('flex justify-center', className)}>
      <Button size='sm' className='w-full' onClick={Login}>
        {isLoading ? (
          <LoaderIcon />
        ) : (
          <>
            <Icons.GitHub className='w-8 h-8 mr-3' />
            GitHub
          </>
        )}
      </Button>
    </div>
  )
}

export default UserAuthForm
