import ThemeToggle from '../themes/theme-toggle';

const SiteHeader = () => (
  <div>
    SiteHeader
    <ThemeToggle />
    <ThemeToggle className='dark:bg-slate-800 bg-slate-100 shadow-lg top-[5%] right-[3%] w-14 h-14 rounded-full fixed' />
  </div>
);

export default SiteHeader;
