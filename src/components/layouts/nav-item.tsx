import { cn } from '@/lib/utils';
import { MainNavItem } from '@/types/nav';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';

interface MainNavProps {
  items: MainNavItem[];
  className: string;
  classNameTwo?: string;
}

const NavItem = ({ items, className, classNameTwo }: MainNavProps) => {
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();

  return (
    <div>
      {items?.length ? (
        <nav className={className}>
          {items?.map((item: any) => (
            <Link
              key={item.id}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'transition-colors hover:text-foreground/80',
                classNameTwo,
                item.disabled ? 'cursor-not-allowed opacity-60' : '',
                item.href.startsWith(`/${segment}`) ? 'text-foreground' : 'text-foreground/60',
                pathname === item.href ? 'text-foreground' : 'text-foreground/60'
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
