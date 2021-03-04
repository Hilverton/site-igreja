import Head from 'next/head';
import Link from 'next/link';
import { Card, Layout } from '../components';
import Prismic from 'prismic-javascript';
import { client } from '../prismic-configuration';

export default function Home({ posts }) {
  console.log('home', posts);
  return (
    <>
      <Head>
        <title>Igreja Assembleia de Deus no Benedito Bentes 2</title>
        <meta
          name='og:description'
          content='Página inicial da Assembleia de Deus no Benedito Bentes 2. Confira nossos eventos, nossas postagens, horários e dias de cultos.'
          key='ogdesc'
        />
      </Head>
      <Layout>
        <div className='w-11/12 mx-auto py-2'>
          <section className='mb-6'>
            <div className='flex justify-between items-center mb-6'>
              <h1 className='text-3xl'>Últimas notícias</h1>
              <Link href='/noticias'>
                <a className='text-lg'>Ver todos</a>
              </Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
              {posts.results.map((post) => {
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
              })}
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'blog_post'),
    { orderings: '[my.post.date desc]', pageSize: 3 },
  );

  return {
    props: {
      posts,
    },
  };
};
