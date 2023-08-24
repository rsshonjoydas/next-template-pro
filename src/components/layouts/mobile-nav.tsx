import { siteConfig } from '@/config/site';
import useModal from '@/hooks/use-modal';
import { MainNavItem } from '@/types/nav';
import Link from 'next/link';
import Icons from '../icons';
import { Button } from '../ui/button';
import Modal from '../ui/modal';
import NavItem from './nav-item';

interface MobileNavProps {
  items: MainNavItem[];
}

const MobileNav = ({ items }: MobileNavProps) => {
  const { modalOpen, close, open } = useModal();

  return (
    <>
      <div className='relative flex items-center justify-center'>
        <Button variant='ghost' onClick={open} className='px-2'>
          <Icons.Menu className='flex-none w-6 h-6 stroke-foreground' />
        </Button>
      </div>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          text='drawer'
          type='drawer'
          handleClose={close}
          className='h-full border-r-2 shadow-lg bg-background'
        >
          <Button variant='outline' type='button' onClick={close} className='mt-2 ml-44'>
            <Icons.Close className='flex-none w-4 h-4 -m-2 stroke-foreground' />
          </Button>
          <div className='flex flex-col items-start justify-center p-2 -mt-6 text-lg'>
            <Link href='/' className='flex items-center mr-6 space-x-2'>
              <span className='font-bold'>{siteConfig.name}</span>
            </Link>
            <NavItem
              items={items}
              className='grid grid-flow-row mt-8 text-sm auto-rows-ma'
              classNameTwo='py-2'
            />
          </div>
        </Modal>
      )}
    </>
  );
};

export default MobileNav;
