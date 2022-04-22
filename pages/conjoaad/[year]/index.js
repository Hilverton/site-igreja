import Prismic from 'prismic-javascript';
import Image from 'next/image';
import { client } from '../../../prismic-configuration';
import { SEO, CardSecondary } from '../../../components';

export default function Ano({ conjoaad, year, posts }) {
  return (
    <>
      <SEO
        title={`CONJOAAD 11ª Região - Ano ${year}`}
        description={`Acompanhe todos as informações e eventos do CONJOAAD da 11ª região do ano de ${year}!`}
        link=''
      />
      <section className='w-11/12 lg:max-w-5xl mx-auto py-6 md:px-32 min-h-screen'>
        <Image
          className='h-auto w-full rounded-md'
          src={conjoaad?.results[0].data.logo.url}
          alt={`Banner do conjoaad do ano de ${year}`}
          layout='responsive'
          height={458}
          width={816}
        />
        <h1 className='text-5xl font-bold text-center mt-8 mb-12'>
          {conjoaad?.results[0].data.tema[0].text}
        </h1>
        <div className='grid grid-cols-1 gap-6'>
          {posts.results.length !== 0 ? (
            posts.results.map((post) => {
              return (
                <CardSecondary
                  key={post.id}
                  title={post.data.titulo[0].text}
                  description={post.data.descricao[0].text}
                  imgUrl={post.data.image.url}
                  altImg={post.data.image.alt}
                  href={`/conjoaad/${year}/${post.uid}`}
                  big
                />
              );
            })
          ) : (
            <h2 className='text-xl text-center'>Sem postagens no momento</h2>
          )}
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { year } = context.params;

  const conjoaad = await client.query([
    Prismic.Predicates.at('document.type', 'year_conjoaad'),
    Prismic.Predicates.any('document.tags', [year]),
  ]);

  const posts = await client.query(
    [
      Prismic.Predicates.at('document.type', 'conjoaad_post'),
      Prismic.Predicates.any('document.tags', [year]),
    ],
    { orderings: '[document.first_publication_date desc]' },
  );

  return {
    props: {
      conjoaad,
      year,
      posts,
    },
  };
};
