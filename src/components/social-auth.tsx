import { SocialIcons } from '@/config/social-icons';
import Image from 'next/image';

const SocialAuth = () => {
  const handleClick = (label: string) => {
    if (label === 'Google') {
      console.log(label);
    } else if (label === 'Facebook') {
      console.log(label);
    }
  };

  return (
    <>
      {SocialIcons.map((authIcon) => (
        <button
          type='button'
          className='flex items-center w-full gap-2 px-4 py-2 my-2 transition duration-150 border rounded-sm h-14 dark:text-gray-400 dark:border-slate-700 dark:hover:bg-gray-700/40 border-slate-200 text-slate-700 hover:bg-gray-200/40 hover:text-slate-900'
          key={authIcon.id}
          onClick={() => handleClick(authIcon.label)}
        >
          <Image
            height={32}
            width={32}
            className='w-6 h-6'
            src={`https://www.svgrepo.com/show/${authIcon.id}/${authIcon.icon}.svg`}
            loading='lazy'
            alt={`${authIcon.label} logo`}
          />
          <span>Continue with {authIcon.label}</span>
        </button>
      ))}
    </>
  );
};

export default SocialAuth;
