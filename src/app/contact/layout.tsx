import SiteHeader from '@/components/layouts/site-header';
import { Children } from '@/types';
import type { Metadata } from 'next';
import Policies from '../../components/policies';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function ContactLayout({ children }: Children) {
  return (
    <>
      <SiteHeader secondary />
      <div className='-mt-20'>
        <div className='flex items-center justify-center h-[90vh]'>{children}</div>
      </div>
      <div className='mt-20'>
        <Policies />
      </div>
    </>
  );
}
