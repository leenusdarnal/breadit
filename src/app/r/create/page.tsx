'use client'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Page = () => {
  const [input, setInput] = useState<string>('')
  const router = useRouter()
  return (
    <div className='container  flext items-center h-full max-w-3xl mx-auto'>
      <div className='relative bg-white w-full h-fit p-4 rounded-lg space-y-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-xl font-semibold'>Create a Community</h1>
        </div>
        <hr className='bg-zinc-500 h-1' />
        <div>
          <p className='text-lg font-medium'>Name</p>
          <p className='text-sm pb-2'>
            Community name including capitalization cannot be changed
          </p>
          <div className='relative'>
            <p className='absolute text-sm left-0 w-8 inset-y-0 grid place-items-center text-zinc-400'>
              r/
            </p>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className='pl-6'
            />
          </div>
        </div>
        <div className='flex justify-end gap-4'>
          <Button type='button' variant='subtle' onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type='button'>Create a Community</Button>
        </div>
      </div>
    </div>
  )
}

export default Page