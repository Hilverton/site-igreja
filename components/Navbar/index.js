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
  const activeRoute = router.route;
  console.log(activeRoute);
  const isOpen = openMenu ? 'h-52 mt-3' : 'h-0';

  return (
    <header className='p-4 bg-gradient-to-l to-my-blue from-my-green font-sans fixed z-50 top-0 w-full'>
      <nav className='flex-col md:flex-row w-full md:inline-flex md:items-center md:justify-between text-white'>
        <img src='/assets/Logo_Ieadal.png' className='h-12' alt='Logo igreja' />
        <span
          className='material-icons absolute top-5 right-4 md:hidden text-3xl'
          onClick={() => setOpenMenu(!openMenu)}
        >
          menu
        </span>
        <div className={`${isOpen} transition-all duration-300 md:flex h-auto`}>
          <ul
            className={`${
              openMenu ? 'flex-col space-y-4' : 'hidden'
            } w-full md:w-min md:flex md:space-x-4`}
          >
            {urls.map((url) => {
              const active =
                router.route === url.path
                  ? 'bg-white text-black'
                  : 'text-white hover:text-black hover:bg-white';
              return (
                <li
                  key={url.id}
                  className={`${active} p-2 md:px-5 rounded-lg uppercase duration-300 cursor-pointer`}
                >
                  <Link href={url.path}>
                    <a>{url.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
