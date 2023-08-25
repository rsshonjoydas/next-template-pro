import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AuthPage = () => (
  <section>
    <div className='my-8 text-sm dark:text-gray-400'>
      <span className='w-auto h-auto space-y-2 text-lg'>
        <p className='flex items-center justify-center'>Welcome to Redolence</p>
        <p className='flex items-center justify-center'>
          Log in with your Redolence account to continue
        </p>
      </span>
    </div>

    <span className='flex items-center justify-center gap-2 -mt-3 text-sm'>
      <Button variant='primary' className='w-20 h-12'>
        <Link href='/auth/login'>Login</Link>
      </Button>{' '}
      <Button variant='primary' className='w-20 h-12'>
        <Link href='/auth/register'>Sign&nbsp;up</Link>
      </Button>
    </span>
  </section>
);

export default AuthPage;
