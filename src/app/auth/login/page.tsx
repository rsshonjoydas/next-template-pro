/* eslint-disable no-unused-vars */

'use client';

import SocialAuth from '@/components/social-auth';
import { FloatingLabelInput, FloatingLabelPasswordInput } from '@/components/ui/Input';
import { AuthButton, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { emailSchema, passwordSchema } from '@/lib/validation/auth';
import { ILogin } from '@/types/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const [step, setStep] = useState(1);
  const [emailData, setEmailData] = useState('');

  const localStorageEmail = typeof window !== 'undefined' ? localStorage.getItem('email') : null;

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ILogin>({
    defaultValues: {
      email: localStorageEmail || '', // Get the email value from local storage
      password: '',
    },
    resolver: yupResolver(step === 1 ? emailSchema : passwordSchema),
    mode: 'onChange',
  });

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [step]);

  const handleNextStep = (data: ILogin) => {
    setEmailData(data.email); // * Set email data in state
    localStorage.setItem('email', data.email); // * Set email data in local storage
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onSubmit = (data: ILogin) => {
    localStorage.removeItem('email');
    console.log(data);
  };

  return (
    <section>
      <h1
        className={`flex items-center justify-center mb-4 text-3xl font-semibold ${
          step === 1 && 'px-[45px]'
        }`}
      >
        {step === 1 ? 'Welcome back' : 'Enter your password'}
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className='flex justify-center'>
        <div className='relative max-w-xs min-w-full py-3 space-y-5 lg:w-96 md:w-96 sm:w-96 sm:rounded-lg'>
          {step === 1 && (
            <FloatingLabelInput
              label='Email address'
              name='email'
              type='email'
              control={control}
              errors={errors}
              inputRef={inputRef}
            />
          )}

          {step === 2 && (
            <>
              <div className='relative'>
                <FloatingLabelInput
                  name='email'
                  control={control}
                  errors={errors}
                  className='pointer-events-none'
                />
                <button
                  type='button'
                  onClick={handlePrevStep}
                  className='absolute flex items-center justify-center mr-2 text-sm transform -translate-y-1/2 text-primary-50 top-1/2 right-2'
                >
                  Edit
                </button>
              </div>
              <FloatingLabelPasswordInput
                label='Password'
                name='password'
                control={control}
                errors={errors}
                inputRef={inputRef}
              />

              <span className='flex items-center justify-center text-sm'>
                <Link
                  href='/auth/reset-password'
                  className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    'text-primary-50 dark:text-primary-50 p-2 -mt-3'
                  )}
                >
                  Forgot password?
                </Link>
              </span>
            </>
          )}

          <AuthButton
            type={step}
            disabled={!isValid}
            onClick={step === 1 ? handleSubmit(handleNextStep) : null}
            variant='primary'
            className='h-14'
          >
            Continue
          </AuthButton>

          <span className='flex items-center justify-center pt-1 pb-3 -mt-24 text-sm'>
            Don&apos;t have an account?&nbsp;
            <Link href='/auth/register' className='text-primary'>
              Sign up
            </Link>
          </span>
        </div>
      </form>

      {step === 1 && <SocialAuth />}
    </section>
  );
};

export default Login;
