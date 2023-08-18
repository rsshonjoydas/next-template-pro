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
      className={`-px-4 -py-2 ${className}`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'dark' ? (
        <Icons.Moon className='w-6 h-6 fill-primary' />
      ) : (
        <Icons.Sun className='w-6 h-6 stroke-primary' />
      )}
    </Button>
  );
};

export default ThemeToggle;
