'use client';

import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Icons from '../icons';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Skeleton } from '../ui/skeleton';

const ThemeToggle = () => {
  const { setTheme: setMode, resolvedTheme: mode } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className='space-y-1.5'>
      <Label className='text-xs'>Mode</Label>
      <div className='grid grid-cols-3 gap-2 w-72'>
        {mounted ? (
          <>
            <Button
              variant='outline'
              size='sm'
              onClick={() => setMode('light')}
              className={cn(mode === 'light' && 'border-2 border-primary')}
            >
              <Icons.Sun className='w-6 h-6 mr-1 stroke-gray-500 dark:stroke-gray-300' />
              Light
            </Button>
            <Button
              variant='outline'
              size='sm'
              onClick={() => setMode('dark')}
              className={cn(mode === 'dark' && 'border-2 border-primary')}
            >
              <Icons.Moon className='w-6 h-6 mr-1 fill-gray-500 dark:fill-gray-300' />
              Dark
            </Button>
          </>
        ) : (
          <>
            <Skeleton className='w-full h-8' />
            <Skeleton className='w-full h-8' />
          </>
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
