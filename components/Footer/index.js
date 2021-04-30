import Image from 'next/image';
import Link from 'next/link';
import { linksSocials } from '../../utils';

export default function Footer() {
  return (
    <footer className='p-4 bg-gradient-to-l to-my-blue from-my-green font-sans w-full'>
      <div className='w-11/12 mx-auto flex flex-col space-y-4 md:space-y-0 md:flex-row justify-center md:justify-between items-center'>
        <div>
          <Link href='/'>
            <figure className='h-auto w-full cursor-pointer'>
              <Image
                src='/assets/Logo_assembleia.png'
                className='h-64 w-full'
                alt='logo igreja sede'
                height={256}
                width={288}
                priority
              />
            </figure>
          </Link>
        </div>
        <div>
          <h3 className='text-2xl text-white mb-8'>Nossas mídias</h3>
          <ul className='space-x-4 flex justify-center items-center'>
            {linksSocials.map((linkSocial) => (
              <li
                key={linkSocial.id}
                className='p-3 rounded-lg h-12 bg-white cursor-pointer flex justify-center items-center'
              >
                <a href={linkSocial.url} target='_blank' rel='noopener'>
                  <figure className='h-9'>
                    <Image
                      src={linkSocial.img}
                      alt={linkSocial.alt}
                      height={36}
                      width={36}
                      priority
                    />
                  </figure>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
