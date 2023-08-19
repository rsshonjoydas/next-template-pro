'use client';

import { MainNavItem } from '@/types/nav';
import Link from 'next/link';
import * as React from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  items: MainNavItem[];
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, href, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={String(href)}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='text-sm leading-snug line-clamp-2 text-muted-foreground'>{children}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
);
ListItem.displayName = 'ListItem';

const MainNav = ({ items }: MobileNavProps) => (
  <div className='hidden gap-6 lg:flex'>
    <NavigationMenu>
      <NavigationMenuList>
        {items?.[0]?.items ? (
          <NavigationMenuItem>
            <NavigationMenuTrigger className='h-auto'>{items[0].title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'>
                <li className='row-span-3'>
                  <NavigationMenuLink asChild>
                    <a
                      aria-label='Home'
                      className='flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md'
                      href='/'
                    >
                      {/* <Icons.logo className='w-6 h-6' aria-hidden='true' /> */}
                      <div className='mt-4 mb-2 text-lg font-medium'>{siteConfig.name}</div>
                      <p className='text-sm leading-tight text-muted-foreground'>
                        {siteConfig.description}
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                {items[0].items.map((listItem) => (
                  <ListItem key={listItem.title} title={listItem.title} href={listItem.href}>
                    {listItem.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ) : null}
        {items
          ?.filter((navItem) => navItem.title !== items[0]?.title)
          .map((item) =>
            item?.items ? (
              <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className='h-auto capitalize'>
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                    {item.items.map((menuItem) => (
                      <ListItem key={menuItem.title} title={menuItem.title} href={menuItem.href}>
                        {menuItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ) : (
              item.href && (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), 'h-auto')}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )
            )
          )}
      </NavigationMenuList>
    </NavigationMenu>
  </div>
);

export default MainNav;
