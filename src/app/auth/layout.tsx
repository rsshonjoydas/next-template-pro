import SiteHeader from '@/components/layouts/site-header';
import { Children } from '@/types';
import type { Metadata } from 'next';
import Policies from '../../components/policies';

export const metadata: Metadata = {
  title: 'Auth',
};

export default function AuthLayout({ children }: Children) {
  return (
    <>
      <SiteHeader secondary />
      <div className='flex items-center justify-center h-[90vh]'>{children}</div>
      <Policies />
    </>
  );
}
