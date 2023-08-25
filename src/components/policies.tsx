import Link from 'next/link';
import { FC } from 'react';

interface PoliciesProps {}

const Policies: FC<PoliciesProps> = () => (
  <div className='flex items-center justify-center -mt-8 text-sm text-primary opacity-90'>
    <Link href='/policies/terms-of-use' target='_blank'>
      Terms of use
    </Link>
    <span className='mx-2'>|</span>
    <Link href='/policies/privacy-policy' target='_blank'>
      Privacy policy
    </Link>
  </div>
);

export default Policies;
