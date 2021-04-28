import Image from 'next/image';
import Link from 'next/link';

export default function CardSecondary({
  title,
  imgUrl,
  altImg,
  description,
  slug,
  big,
}) {
  const isBig = big ? 'md:flex md:p-6 ' : 'h-full';
  const imgRounded = big && 'md:rounded-lg';
  const body = big ? 'p-6 md:py-2 md:pl-6 md:pr-3' : 'p-6';

  return (
    <div
      className={`${isBig} border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white`}
    >
      <figure
        className={`h-auto max-h-64 w-full md:w-1/2 ${imgRounded} overflow-hidden`}
      >
        <Image
          className='w-full h-full'
          src={imgUrl}
          alt={altImg}
          layout='responsive'
          height={252}
          width={448}
          priority
        />
      </figure>
      <div className={`${body} w-full md:w-1/2`}>
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
