import SignIn from '@/components/SignIn'
import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const SignInPage = () => {
  return (
    <div className='absolute inset-0'>
      <div className='h-full max-w-2xl flex flex-col items-center justify-center  m-auto'>
        <Link
          href='/'
          className={cn(
            buttonVariants({ variant: 'ghost' }),
            'self-start mt-20'
          )}
        >
          Home
        </Link>
        <SignIn />
      </div>
    </div>
  )
}

export default SignInPage