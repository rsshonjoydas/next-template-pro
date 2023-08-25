import SiteFooter from '@/components/layouts/site-footer';
import SiteHeader from '@/components/layouts/site-header';

interface LobbyLayoutProps {
  children: React.ReactNode;
}

export default async function LobbyLayout({ children }: LobbyLayoutProps) {
  return (
    <div className='relative flex flex-col min-h-screen'>
      <SiteHeader />
      <div className='flex-1'>{children}</div>
      <SiteFooter />
    </div>
  );
}
