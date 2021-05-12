import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';
import { Card, SEO } from '../../components';

export default function Ebd({ posts }) {
  const link = 'https://www.portaladbeneditobentes2.com.br/ebd';

  const firstPage = posts.page === 1;
  const lastPage = posts.page === posts.total_pages;

  function prevPage() {
    if (firstPage) return;

    router.push({
      pathname: '/ebd',
      query: {
        pagina: posts.page - 1,
      },
    });
  }

  function nextPage() {
    if (lastPage) return;

    router.push({
      pathname: '/ebd',
      query: {
        pagina: posts.page + 1,
      },
    });
  }

  return (
    <>
      <SEO
        title='Escola Bíblica Dominical'
        description='Tudo sobre os eventos e principais acontecimentos da nossa escola bíblica dominical.'
        link={link}
      />
      <section className='w-11/12 lg:max-w-5xl mx-auto py-6'>
        <h1 className='text-2xl text-center md:text-left mb-6'>
          Atividades e eventos da Escola Bíblica Dominical
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {posts.results.length !== 0 ? (
            <>
              {posts.results.map((post) => {
                return (
                  <Card
                    key={post.id}
                    title={post.data.titulo[0].text}
                    description={post.data.descricao[0].text}
                    imgUrl={post.data.image.url}
                    altImg={post.data.image.alt}
                    slug={post.uid}
                    navigateTo='ebd'
                  />
                );
              })}
              {posts.total_pages > 1 && (
                <Pagination
                  firstPage={firstPage}
                  page={posts.page}
                  lastPage={lastPage}
                  prevClick={prevPage}
                  nextClick={nextPage}
                />
              )}
            </>
          ) : (
            <h1 className='text-lg'>Nenhuma notícia foi encontrada</h1>
          )}
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { pagina = 1 } = context.query;

  const options = {
    orderings: '[document.first_publication_date desc]',
    page: pagina,
    pageSize: 9,
  };

  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'ebd_post'),
    options,
  );

  return {
    props: {
      posts,
    },
  };
};
