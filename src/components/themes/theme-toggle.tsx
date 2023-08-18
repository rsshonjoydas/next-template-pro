'use client';

import { useTheme } from 'next-themes';
import Icons from '../icons';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  const theme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='px-2'>
          <Icons.Sun className='w-6 h-6 transition-all scale-100 rotate-0 hover:text-slate-900 dark:-rotate-90 dark:scale-0 dark:text-slate-400 dark:hover:text-slate-100 stroke-sky-500' />
          <Icons.Moon className='absolute w-6 h-6 transition-all scale-0 rotate-90 hover:text-slate-900 dark:rotate-0 dark:scale-100 dark:text-slate-400 dark:hover:text-slate-100 fill-sky-500' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' forceMount>
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className={`${theme === 'light' ? 'bg-accent' : ''}`}
        >
          <Icons.Sun
            className={`w-5 h-5 mr-2 ${theme === 'light' ? 'stroke-sky-500' : 'stroke-slate-400'}`}
          />
          <span className={`${theme === 'light' ? 'text-sky-500' : null}`}>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className={`${theme === 'dark' ? 'bg-accent' : ''}`}
        >
          <Icons.Moon
            className={`w-5 h-5 mr-2 ${theme === 'dark' ? 'fill-sky-500' : 'fill-slate-400'}`}
          />

          <span className={`${theme === 'dark' ? 'text-sky-500' : null}`}>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className={`${theme === 'system' || theme === null ? 'bg-accent' : ''}`}
        >
          <Icons.System
            className={`${
              theme === 'system' || theme === null ? 'stroke-sky-500' : 'stroke-slate-400'
            }`}
          />
          <span className={`${theme === 'system' || theme === null ? 'text-sky-500' : ''}`}>
            System
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
