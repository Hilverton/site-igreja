import Head from 'next/head';
import { Card, Layout } from '../components';
import Prismic from 'prismic-javascript';
import { client } from '../prismic-configuration';

export default function Home({ posts }) {
  console.log('home', posts);
  return (
    <>
      <Head>
        <title>Igreja Assembleia de Deus no Benedito Bentes 2</title>
      </Head>
      <Layout>
        <div className='w-11/12 mx-auto py-2'>
          <section className='mb-6'>
            <div className='flex justify-between items-center mb-6'>
              <h1 className='text-3xl'>Últimas notícias</h1>
              <span className='text-lg'>Ver todos</span>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
              <Card title='Culto de Senhoras' />
              <Card title='Culto de Doutrina' />
              <Card title='Culto Evangelístico' />
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
