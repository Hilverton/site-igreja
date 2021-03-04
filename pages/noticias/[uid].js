import Head from 'next/head';
import { Layout, Card } from '../../components';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { client } from '../../prismic-configuration';

export default function Noticia({ post, posts }) {
  return (
    <>
      <Head>
        <title>IEADAL-BB2 | Notícia</title>
        <meta property='og:image' content={post.data.image.url} key='ogimage' />
        <meta
          property='og:title'
          content={post.data.titulo[0].text}
          key='ogtitle'
        />
        <meta
          name='og:description'
          content={post.data.descricao[0].text}
          key='ogdesc'
        />
      </Head>
      <Layout>
        <section className='w-11/12 mx-auto py-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <div className='col-span-2 content'>
              <h1 className='font-bold text-2xl mb-2'>
                {post.data.titulo[0].text}
              </h1>
              <span>{post.data.descricao[0].text}</span>
              <figure className='my-4 rounded-lg overflow-hidden'>
                <img
                  className='w-full h-full'
                  src={post.data.image.url}
                  alt='blog'
                />
              </figure>
              <RichText render={post.data.conteudo} />
              <div className='flex items-center'>
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
            <div className='grid grid-cols-1 auto-rows-auto'>
              <h1 className='font-bold text-xl'>Relacionados</h1>
              {posts.length !== 0 ? (
                posts.results.map((post) => {
                  console.log('uid correto', post.data.uid);
                  return (
                    <Card
                      key={post.id}
                      title={post.data.titulo[0].text}
                      description={post.data.descricao[0].text}
                      imgUrl={post.data.image.url}
                      altImg={post.data.image.alt}
                      slug={post.uid}
                    />
                  );
                })
              ) : (
                <h1 className='text-lg mx-auto'>Sem conteúdo relacionado</h1>
              )}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getStaticPaths = async () => {
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'blog_post'),
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
  const post = await client.getByUID('blog_post', `${params.uid}`, {
    lang: 'pt-br',
  });

  const posts = await client.query(
    Prismic.Predicates.not('my.blog_post.uid', params.uid),
    { orderings: '[my.post.date desc]', pageSize: 2 },
  );

  return {
    props: {
      post,
      posts,
    },
  };
};
