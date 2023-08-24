import { ClassName } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ className }: ClassName) => (
  <div className={`pt-1 ml-4 ${className}`}>
    <Link href='/'>
      <Image
        height={40}
        width={40}
        className='rounded-md cursor-pointer'
        src='https://res.cloudinary.com/dmgbtukr2/image/upload/v1642085457/avatar/rs_xedovq.jpg'
        alt='logo'
      />
    </Link>
  </div>
);

export default Logo;
