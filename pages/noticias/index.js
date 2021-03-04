import Head from 'next/head';
import { Layout, Card } from '../../components';
import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';

export default function Noticias({ posts }) {
  console.log('noticias', posts);
  return (
    <>
      <Head>
        <title>IEADAL-BB2 | Notícias</title>
      </Head>
      <Layout>
        <section className='w-11/12 mx-auto py-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <div className='col-span-1 md:col-span-2 space-y-6'>
              {posts.results.map((post) => {
                return (
                  <Card
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
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export const getServerSideProps = async () => {
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'blog_post'),
    { orderings: '[my.post.date desc]' },
  );

  return {
    props: {
      posts,
    },
  };
};
