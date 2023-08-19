import { cn } from '@/lib/utils';
import { MainNavItem } from '@/types/nav';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface MainNavProps {
  items: MainNavItem[];
  className: string;
}

const NavItem = ({ items, className }: MainNavProps) => {
  const [activeLabelOnScroll, setActiveLabelOnScroll] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map((item) => item.title?.toLocaleLowerCase());
      const activeSection: any = sections.find((section: string) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 0 && rect.bottom > 0;
        }
        return false;
      });

      setActiveLabelOnScroll(activeSection);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items]);

  return (
    <div>
      {items?.length ? (
        <nav className={className}>
          {items?.map((item) => (
            <Link
              key={item.id}
              href={item.disabled ? '#' : `#${item.title?.toLocaleLowerCase()}`}
              className={cn(
                'transition-colors py-1 hover:text-foreground/80',
                item.disabled ? 'cursor-not-allowed opacity-60' : '',
                activeLabelOnScroll === item.title?.toLocaleLowerCase()
                  ? 'text-foreground'
                  : 'text-foreground/60'
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  );
};

export default NavItem;
