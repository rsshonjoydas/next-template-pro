'use client';

import { AuthButton, buttonVariants } from '@/components/ui/button';
import { FloatingLabelInput } from '@/components/ui/Input';
import { cn } from '@/lib/utils';
import { emailSchema } from '@/lib/validation/auth';
import { IEmail } from '@/types/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

const ResetPasswordPage = () => {
  const localStorageEmail = typeof window !== 'undefined' ? localStorage.getItem('email') : null;

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IEmail>({
    defaultValues: {
      email: localStorageEmail || '', // Get the email value from local storage
    },
    resolver: yupResolver(emailSchema),
    mode: 'onChange',
  });

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onSubmit = (data: IEmail) => {
    localStorage.removeItem('email');

    console.log(data);
  };

  return (
    <section>
      <div className='mb-4 text-sm dark:text-gray-400'>
        <h1 className='flex items-center justify-center mb-2 text-3xl font-semibold dark:text-gray-400'>
          Reset your password
        </h1>
        <span className='w-auto h-auto text-sm'>
          <p className='flex items-center justify-center'>
            Enter your email address and we will send you
          </p>
          <p className='flex items-center justify-center'>instructions to reset your password.</p>
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className='flex justify-center'>
        <div className='relative max-w-xs min-w-full py-3 space-y-5 lg:w-96 md:w-96 sm:w-96 sm:rounded-lg'>
          <FloatingLabelInput
            label='Email address'
            name='email'
            type='email'
            control={control}
            errors={errors}
            inputRef={inputRef}
          />

          <AuthButton disabled={!isValid} variant='primary' className='h-14'>
            Continue
          </AuthButton>

          <span className='flex items-center justify-center text-sm'>
            <Link
              href='/auth'
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                'text-primary-50 dark:text-primary-50 p-2 -mt-3'
              )}
            >
              Back to Apps Client
            </Link>
          </span>
        </div>
      </form>
    </section>
  );
};

export default ResetPasswordPage;
