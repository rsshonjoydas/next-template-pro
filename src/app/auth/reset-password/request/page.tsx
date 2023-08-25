'use client';

import { Button } from '@/components/ui/button';

const RequestResetPassword = () => (
  <section>
    <div className='mb-8 -mt-48 text-sm dark:text-gray-400'>
      <h1 className='flex items-center justify-center mb-4 text-2xl font-thin dark:text-gray-400'>
        Check Your Email
      </h1>
      <span className='w-auto h-auto space-y-1 text-sm'>
        <p className='flex items-center justify-center'>Please check the email address</p>
        <p className='flex items-center justify-center'>rsshonjoy@gmail.com for instructions to</p>
        <p className='flex items-center justify-center'>reset your password.</p>
      </span>
    </div>

    <span className='flex items-center justify-center -mt-3 text-sm'>
      <Button variant='glass' className='h-14'>
        Resend email
      </Button>
    </span>
  </section>
);

export default RequestResetPassword;
