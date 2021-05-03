import { useState } from 'react';
import { useRouter } from 'next/router';
import { Layout, CardSecondary, SEO } from '../../components';
import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';
import { filters } from '../../utils';

export default function Noticias({ posts, search }) {
  const router = useRouter();
  const [filt, setFilt] = useState(filter);

  const firstPage = posts.page === 1;
  const lastPage = posts.page === posts.total_pages;

  function filter() {
    let nFilter = filters;
    const newFilter = nFilter.map((filter) => {
      search.map((tag) => {
        if (filter.name === tag) {
          return (filter.value = !filter.value);
        }
      });
      return filter;
    });
    return newFilter;
  }

  function handleFilterTags() {
    let tags = [];
    filt.filter((itemFilter) => {
      if (itemFilter.value === true) {
        tags.push(itemFilter.name);
      }
    });
    return tags;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const tags = handleFilterTags();

    router.push({
      pathname: '/noticias',
      query: {
        tags,
      },
    });
  }

  function handleCheckbox(e) {
    const { name } = e.target;

    let newFilt = filt;
    newFilt.map((nfilt) => {
      if (nfilt.name === name) {
        nfilt.value = !nfilt.value;
      }
      setFilt(newFilt);
    });
  }

  function prevPage() {
    if (firstPage) return;
    const tags = handleFilterTags();

    router.push({
      pathname: '/noticias',
      query: {
        pagina: posts.page - 1,
        tags,
      },
    });
  }

  function nextPage() {
    if (lastPage) return;
    const tags = handleFilterTags();

    router.push({
      pathname: '/noticias',
      query: {
        pagina: posts.page + 1,
        tags,
      },
    });
  }

  const link = 'https://www.portaladbeneditobentes2.com.br/noticias';

  return (
    <>
      <SEO
        title='Nossas Notícias'
        description='Listagem das nossas notícias, postagens e eventos.'
        link={link}
      />
      <Layout>
        <section className='w-11/12 lg:max-w-5xl mx-auto py-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <div className='col-span-1 md:col-span-2 space-y-6'>
              {posts.results.length !== 0 ? (
                <>
                  {posts.results.map((post) => {
                    return (
                      <CardSecondary
                        key={post.id}
                        title={post.data.titulo[0].text}
                        description={post.data.descricao[0].text}
                        imgUrl={post.data.image.url}
                        altImg={post.data.image.alt}
                        slug={post.uid}
                        big
                      />
                    );
                  })}
                  {posts.total_pages > 1 && (
                    <section className='flex justify-center items-center space-x-4'>
                      <button
                        className={`bg-white p-2 rounded-md border border-gray-200 ${
                          firstPage && 'bg-gray-300'
                        }`}
                        disabled={firstPage}
                        onClick={prevPage}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='100%'
                          height='100%'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='feather feather-chevron-left w-6 h-6'
                        >
                          <polyline points='15 18 9 12 15 6'></polyline>
                        </svg>
                      </button>
                      <p>Página: {posts.page}</p>
                      <button
                        className={`bg-white p-2 rounded-md border border-gray-200 ${
                          lastPage && 'bg-gray-300'
                        }`}
                        disabled={lastPage}
                        onClick={nextPage}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='100%'
                          height='100%'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='feather feather-chevron-right w-6 h-6'
                        >
                          <polyline points='9 18 15 12 9 6'></polyline>
                        </svg>
                      </button>
                    </section>
                  )}
                </>
              ) : (
                <h1 className='text-lg'>Nenhuma notícia foi encontrada</h1>
              )}
            </div>
            <div className='h-80 bg-white rounded-md w-full p-6'>
              <form
                className='grid grid-cols-2 gap-3 md:gap-5'
                onSubmit={handleSubmit}
              >
                {filt.map((filter) => (
                  <label
                    key={filter.id}
                    className='flex justify-start items-center'
                  >
                    <div className='bg-white border-2 rounded border-gray-400 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-my-blue'>
                      <input
                        name={filter.name}
                        type='checkbox'
                        className='opacity-0 absolute check'
                        onChange={handleCheckbox}
                        defaultChecked={filter.value}
                      />
                      <svg
                        className='fill-current hidden w-4 h-4 text-my-green pointer-events-none'
                        viewBox='0 0 20 20'
                      >
                        <path d='M0 11l2-2 5 5L18 3l2 2L7 18z' />
                      </svg>
                    </div>
                    <div className='select-none text-lg'>{filter.name}</div>
                  </label>
                ))}
                <div className='col-span-2 md:col-span-1 mt-5'>
                  <button className='w-full md:w-auto py-4 md:px-6 text-white rounded-md bg-gradient-to-l to-my-blue from-my-green '>
                    Buscar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { tags, pagina = 1 } = context.query;
  let posts = [];
  let search = [];

  const options = {
    orderings: '[document.first_publication_date desc]',
    page: pagina,
  };
  if (tags !== undefined) {
    search = typeof tags === 'string' ? [tags] : tags;
    posts = await client.query(
      [
        Prismic.Predicates.at('document.type', 'blog_post'),
        Prismic.Predicates.any('document.tags', search),
      ],
      options,
    );
  } else {
    posts = await client.query(
      Prismic.Predicates.at('document.type', 'blog_post'),
      options,
    );
  }

  return {
    props: {
      posts,
      search,
    },
  };
};
