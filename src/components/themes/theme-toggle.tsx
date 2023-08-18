'use client';

import { useTheme } from 'next-themes';

import Icons from '@/components/icons';
import { Button } from '@/components/ui/button';
import { ClassName } from '@/types';

const ThemeToggle = ({ className }: ClassName) => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant='shake'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={`-px-4 -py-2 ${className}`}
    >
      <Icons.Sun
        className='w-6 h-6 transition-all scale-100 rotate-0 stroke-primary dark:-rotate-90 dark:scale-0'
        aria-hidden='true'
      />
      <Icons.Moon
        className='absolute w-6 h-6 transition-all scale-0 rotate-90 fill-primary dark:rotate-0 dark:scale-100'
        aria-hidden='true'
      />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
