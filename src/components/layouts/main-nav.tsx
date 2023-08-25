'use client';

import { MainNavItem } from '@/types/nav';
import NavItem from './nav-item';

interface MobileNavProps {
  items: MainNavItem[];
}

const MainNav = ({ items }: MobileNavProps) => (
  <nav className='container px-4 mx-auto'>
    <div className='flex items-center justify-between lg:justify-end'>
      <div className='justify-end hidden md:flex lg:flex'>
        <NavItem items={items} className='hidden gap-6 md:flex' />
      </div>
    </div>
  </nav>
);

export default MainNav;
