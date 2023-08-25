'use client';

import SocialAuth from '@/components/social-auth';
import { FloatingLabelInput, FloatingLabelPasswordInput } from '@/components/ui/Input';
import { AuthButton } from '@/components/ui/button';
import { emailSchema, passwordSchema } from '@/lib/validation/auth';
import { IRegister } from '@/types/auth';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
  const [step, setStep] = useState(1);

  const localStorageEmail = typeof window !== 'undefined' ? localStorage.getItem('email') : null;

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IRegister>({
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

  const handleNextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const onSubmit = async (values: IRegister) => {
    const { email, password } = values;
    console.log('🚀 ~ file: page.tsx:49 ~ onSubmit ~ email, password:', email, password);
  };

  return (
    <section>
      <div className='mb-4 text-sm dark:text-gray-400'>
        <h1 className='flex items-center justify-center mb-2 text-3xl font-semibold dark:text-gray-400'>
          {step === 1 ? 'Create your account' : 'Enter your password'}
        </h1>
        <span className='w-auto h-auto text-[13px]'>
          <p className='flex items-center justify-center'>
            Please note that email verification is required for
          </p>
          <p className='flex items-center justify-center'>
            signup. Your email will only be used to verify
          </p>
          <p className='flex items-center justify-center'>your identity for security purposes.</p>
        </span>
      </div>

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
            </>
          )}

          <AuthButton
            type={step}
            disabled={!isValid}
            onClick={step === 1 ? handleNextStep : null}
            variant='primary'
            className='h-14'
          >
            Continue
          </AuthButton>

          <span className='flex items-center justify-center pt-1 pb-3 -mt-24 text-sm'>
            Don&apos;t have an account?&nbsp;
            <Link href='/auth/login' className='text-primary'>
              Log in
            </Link>
          </span>
        </div>
      </form>

      {step === 1 && <SocialAuth />}
    </section>
  );
};

export default Register;
