'use client';

import { Button } from '@/components/ui/button';

const VerifyEmail = () => {
  const handleSubmit = async () => {
    console.log('form submission');
  };

  return (
    <section>
      <div className='mb-8 -mt-48 text-sm dark:text-gray-400'>
        <h1 className='flex items-center justify-center mb-4 text-2xl font-thin dark:text-gray-400'>
          Verify your email
        </h1>
        <span className='w-auto h-auto space-y-1 text-sm'>
          <p className='flex items-center justify-center'>We sent an email to</p>
          <p className='flex items-center justify-center'>rsshonjoydas@gmail.com</p>
          <p className='flex items-center justify-center'>Click the link inside to get started.</p>
        </span>
      </div>

      <span className='flex items-center justify-center -mt-3 text-sm'>
        <Button variant='glass' onClick={handleSubmit} className='h-14'>
          Resend email
        </Button>
      </span>
    </section>
  );
};

export default VerifyEmail;
