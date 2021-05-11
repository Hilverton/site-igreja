import Image from 'next/image';
import { Layout, Card, SEO } from '../../components';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { client } from '../../prismic-configuration';

export default function Noticia({ post, posts }) {
  const link = `https://www.portaladbeneditobentes2.com.br/ebd/${post.uid}`;
  return (
    <>
      <SEO
        title={`Escola Bíblica Dominical - ${post.data.titulo[0].text}`}
        description={post.data.descricao[0].text}
        image={post.data.image.url}
        link={link}
      />
      <Layout>
        <section className='w-11/12 lg:max-w-5xl mx-auto py-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-6 md:space-y-0 md:gap-6'>
            <div className='col-span-2 content'>
              <h1 className='font-bold text-2xl mb-2'>
                {post.data.titulo[0].text}
              </h1>
              <span>{post.data.descricao[0].text}</span>
              <figure className='my-4 rounded-lg overflow-hidden'>
                <Image
                  className='w-full h-full'
                  src={post.data.image.url}
                  alt='blog'
                  layout='responsive'
                  height={458}
                  width={816}
                />
              </figure>
              <RichText render={post.data.conteudo} />
              <div className='flex items-center my-4 space-x-6'>
                {post.data.photos_link.url !== undefined && (
                  <a
                    href={post.data.photos_link.url}
                    className='py-2 px-6 rounded-md bg-gradient-to-l to-my-blue from-my-green text-white'
                    target='_blank'
                    rel='noopener'
                  >
                    Galeria
                  </a>
                )}
                {post.data.youtube_link.url !== undefined && (
                  <a
                    href={post.data.youtube_link.url}
                    className='py-2 px-6 rounded-md bg-gradient-to-l to-my-blue from-my-green text-white'
                    target='_blank'
                    rel='noopener'
                  >
                    Evento
                  </a>
                )}
              </div>
              <div className='flex items-center bg-white rounded-md p-4 border-2 border-gray-200 border-opacity-60'>
                <figure>
                  <img
                    className='w-10 h-10 rounded-full'
                    src={post.data.autor.url}
                    alt={post.data.autor.alt}
                  />
                </figure>
                <span className='ml-4'>{post.data.nome_do_autor[0].text}</span>
              </div>
            </div>
            <div className='col-span-2 md:col-span-1'>
              <h1 className='font-bold text-xl mb-6'>Relacionados</h1>
              {posts.results.length === 0 && (
                <div className=''>
                  <h1 className='text-lg'>Sem conteúdo relacionado</h1>
                </div>
              )}
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6'>
                {posts.results.length !== 0 &&
                  posts.results.map((post) => {
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
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'ebd_post'),
    { orderings: '[my.post.date desc]' },
  );

  const allBlogPosts = [];

  posts.results.map((post) => {
    allBlogPosts.push({ params: { uid: post.uid } });
  });

  return {
    paths: allBlogPosts,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await client.getByUID('ebd_post', `${params.uid}`, {
    lang: 'pt-br',
  });

  const posts = await client.query(
    [
      Prismic.Predicates.at('document.type', 'ebd_post'),
      Prismic.Predicates.not('my.ebd_post.uid', `${params.uid}`),
      Prismic.Predicates.any('document.tags', post.tags),
    ],
    { orderings: '[document.first_publication_date desc]', pageSize: 2 },
  );
  return {
    props: {
      post,
      posts,
    },
  };
};