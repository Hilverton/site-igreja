import Image from 'next/image';
import Link from 'next/link';

export default function Card({ title, imgUrl, altImg, description, slug }) {
  return (
    <div className='border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white'>
      <figure className='h-auto w-full'>
        <Image
          className='w-full h-full'
          src={imgUrl}
          alt={altImg}
          height={362}
          width={640}
        />
      </figure>
      <div className='p-6'>
        <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
          {title}
        </h1>
        <p className='leading-relaxed mb-3'>{description}</p>
        <div className='flex items-center flex-wrap '>
          <Link href={`/noticias/${slug}`}>
            <a className='text-my-blue inline-flex items-center md:mb-2 lg:mb-0'>
              Leia mais
              <svg
                className='w-4 h-4 ml-2'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M5 12h14'></path>
                <path d='M12 5l7 7-7 7'></path>
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
