import { Children } from '@/types';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Policies',
};

export default function PoliciesLayout({ children }: Children) {
  return <div className='container px-4 py-8 mx-auto mt-12'>{children}</div>;
}
