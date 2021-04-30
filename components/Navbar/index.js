import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const urls = [
  {
    id: 1,
    path: '/',
    title: 'Início',
  },
  {
    id: 2,
    path: '/departamentos',
    title: 'Departamentos',
  },
  {
    id: 3,
    path: '/ebd',
    title: 'Ebd',
  },
  {
    id: 4,
    path: '/noticias',
    title: 'Notícias',
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const isOpen = openMenu ? 'h-52 mt-3' : 'h-0';

  return (
    <header className='py-4 bg-gradient-to-l to-my-blue from-my-green font-sans fixed z-50 top-0 w-full'>
      <nav className='flex-col md:flex-row md:flex md:items-center md:justify-between text-white w-11/12 lg:max-w-5xl mx-auto'>
        <Link href='/'>
          <img
            src='/assets/Logo_ad_local.png'
            className='h-14 lg:h-20 cursor-pointer'
            alt='Logo igreja'
          />
        </Link>
        <span
          className='absolute top-7 right-4 sm:right-7 md:hidden text-3xl'
          onClick={() => setOpenMenu(!openMenu)}
        >
          <svg
            className='fill-current h-8 w-8 text-white'
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 20 20'
          >
            <title>menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
          </svg>
        </span>
        <div className={`${isOpen} transition-all duration-300 md:flex h-auto`}>
          <ul
            className={`${
              openMenu ? 'flex-col space-y-4' : 'hidden'
            } w-full md:w-min md:flex md:space-x-4`}
          >
            {urls.map((url) => {
              const routeMain = router.route.split('/')[1];
              const routeLink = url.path.split('/')[1];
              const active =
                routeMain === routeLink
                  ? 'bg-white text-black'
                  : 'text-white hover:text-black hover:bg-white';

              return (
                <Link key={url.id} href={url.path}>
                  <li
                    className={`${active} p-2 md:px-5 rounded-lg uppercase duration-300 cursor-pointer`}
                  >
                    <a>{url.title}</a>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
