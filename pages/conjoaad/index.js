import Prismic from 'prismic-javascript';
import Link from 'next/link';
import Image from 'next/image';

import { client } from '../../prismic-configuration';
import { SEO } from '../../components';

export default function Conjoaad({ conjoaads }) {
  return (
    <>
      <SEO
        title='CONJOAAD 11ª Região'
        description='Acompanhe todos as informações e eventos do CONJOAAD da 11ª região!'
        link=''
      />
      <section className='w-11/12 lg:max-w-5xl mx-auto py-6 md:px-32 min-h-screen'>
        <h1 className='text-5xl text-center font-bold md:text-left mt-8 mb-12'>
          CONJOAAD 11ª Região
        </h1>
        <div className='grid grid-cols-1 gap-6'>
          {conjoaads.results.map((conjoaad) => (
            <Link
              href={`/conjoaad/${conjoaad.data.ano_do_evento[0].text}`}
              key={conjoaad.data.tema}
            >
              <article className='p-5 bg-white font-sans rounded-lg cursor-pointer md:flex items-center border-2 border-gray-200'>
                <figure className='rounded-lg md:w-1/3 overflow-hidden'>
                  <Image
                    className='w-full h-full'
                    src={conjoaad.data.logo.url}
                    alt='blog'
                    layout='responsive'
                    height={458}
                    width={816}
                  />
                </figure>
                <div className='md:ml-2 mt-4 md:mt-0'>
                  <h2 className='text-2xl md:text-3xl font-bold text-center md:text-left mb-1'>
                    {conjoaad.data.tema[0].text}
                  </h2>
                  <p className='text-base md:text-lg text-center md:text-left md:ml-2'>
                    {conjoaad.data.ano_do_evento[0].text}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const conjoaads = await client.query(
    Prismic.Predicates.at('document.type', 'year_conjoaad'),
    { orderings: '[document.first_publication_date desc]' },
  );

  return {
    props: {
      conjoaads,
    },
  };
};
