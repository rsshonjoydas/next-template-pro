/* eslint-disable no-shadow */
/* eslint-disable react/no-array-index-key */

'use client';

import type { MainNavItem } from '@/types/nav';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

import Icons from '@/components/icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

interface MobileLinkProps {
  children?: React.ReactNode;
  href: string;
  disabled?: boolean;
  pathname: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MobileNavProps {
  mainNavItems?: MainNavItem[];
}

function MobileLink({ children, href, disabled, pathname, setIsOpen }: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        'text-foreground/70 transition-colors hover:text-foreground',
        pathname === href && 'text-foreground',
        disabled && 'pointer-events-none opacity-60'
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
}

const MobileNav = ({ mainNavItems }: MobileNavProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant='ghost'
          className='px-0 mr-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden'
        >
          <Icons.Menu className='flex-none w-6 h-6 stroke-foreground' />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='w-1/2 pl-1 pr-0'>
        <div className='px-7'>
          <Link
            aria-label='Home'
            href='/'
            className='flex items-center'
            onClick={() => setIsOpen(false)}
          >
            {/* <Icons.logo className='w-4 h-4 mr-2' aria-hidden='true' /> */}
            <span className='font-bold'>{siteConfig.name}</span>
          </Link>
        </div>
        <ScrollArea className='my-4 h-[calc(100vh-8rem)] pb-10 pl-6'>
          <div className='pl-1 pr-7'>
            <Accordion type='single' collapsible className='w-full'>
              {mainNavItems?.map((item, index) => (
                <AccordionItem value={item.title} key={index}>
                  <AccordionTrigger className='text-sm capitalize'>{item.title}</AccordionTrigger>
                  <AccordionContent>
                    <div className='flex flex-col space-y-2'>
                      {item.items?.map((subItem, index) =>
                        subItem.href ? (
                          <MobileLink
                            key={index}
                            href={String(subItem.href)}
                            pathname={pathname}
                            setIsOpen={setIsOpen}
                            disabled={subItem.disabled}
                          >
                            {subItem.title}
                          </MobileLink>
                        ) : (
                          <div key={index} className='transition-colors text-foreground/70'>
                            {item.title}
                          </div>
                        )
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
