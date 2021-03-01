import { useState } from 'react';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const isOpen = openMenu ? 'h-52 mt-3' : 'h-0';

  return (
    <header className='p-4 bg-gradient-to-l to-my-blue from-my-green font-sans fixed top-0 w-full'>
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
            <li className='p-2 md:px-5 rounded-lg uppercase text-white hover:text-black hover:bg-white duration-300 cursor-pointer'>
              Início
            </li>
            <li className='p-2 md:px-5 rounded-lg uppercase text-white hover:text-black hover:bg-white duration-300 cursor-pointer'>
              Departamentos
            </li>
            <li className='p-2 md:px-5 rounded-lg uppercase text-white hover:text-black hover:bg-white duration-300 cursor-pointer'>
              Ebd
            </li>
            <li className='p-2 md:px-5 rounded-lg uppercase text-white hover:text-black hover:bg-white duration-300 cursor-pointer'>
              Notícias
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
