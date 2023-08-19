'use client';

import { mainNav } from '@/config/nav';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Icons from '../icons';
import Logo from '../logo';
import ThemeToggle from '../themes/theme-toggle';
import { buttonVariants } from '../ui/button';
import MainNav from './main-nav';
import MobileNav from './mobile-nav';

const SiteHeader = () => (
  <header className='sticky top-0 z-50 w-full border-b h-14 supports-backdrop-blur:bg-background/60 bg-background/95 backdrop-blur'>
    <div className='container px-4 mx-auto sm:px-6'>
      <div className='flex items-center justify-between lg:justify-end'>
        <div className='md:hidden'>
          <div className='inline-flex items-center justify-center p-3 cursor-pointer'>
            <MobileNav items={mainNav} />
          </div>
        </div>

        <div className='justify-start hidden md:flex md:-mt-2 lg:w-0 lg:flex-1'>
          <Logo />
        </div>

        <nav className='justify-end hidden p-3 md:flex lg:flex'>
          <MainNav items={mainNav} />
        </nav>

        <nav className='flex items-center'>
          <Link href={siteConfig.links.github} target='_blank' rel='noreferrer'>
            <div
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                }),
                'w-9 px-0'
              )}
            >
              <Icons.GitHub className='w-4 h-4' />
              <span className='sr-only'>GitHub</span>
            </div>
          </Link>
          <Link href={siteConfig.links.twitter} target='_blank' rel='noreferrer'>
            <div
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                }),
                'w-9 px-0'
              )}
            >
              <Icons.XTwitter className='w-4 h-4 fill-current' />
              <span className='sr-only'>Twitter</span>
            </div>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </div>
  </header>
);

export default SiteHeader;
