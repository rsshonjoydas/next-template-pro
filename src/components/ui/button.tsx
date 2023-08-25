/* eslint-disable react/jsx-no-useless-fragment */
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';
import Icons from '../icons';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        subtle:
          'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
        glass:
          'flex items-center justify-center w-full gap-2 px-4 py-2 my-2 text-[16px] transition duration-150 border rounded-sm h-14 dark:text-gray-400 dark:border-slate-700 dark:hover:bg-gray-700/40 border-slate-200 text-slate-700 hover:bg-gray-200/40 hover:text-slate-900',
        primary:
          'w-full h-14 mt-2 text-lg rounded-[4px] bg-primary hover:opacity-90 text-yellow-50',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  onClick?: any;
  disabled?: boolean;
  type?: any;
  step?: number;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

const AuthButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, step, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      disabled={isLoading}
      type={step === 1 ? 'button' : 'submit'}
      {...props}
    >
      {isLoading ? (
        <>
          {isLoading ? (
            <>
              <Icons.Loading /> Loading...
            </>
          ) : (
            `${children}`
          )}
        </>
      ) : (
        <>{children}</>
      )}
    </button>
  )
);
AuthButton.displayName = 'AuthButton';

export { AuthButton, Button, buttonVariants };
