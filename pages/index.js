import Head from 'next/head';
import Link from 'next/link';
import { Card, Layout } from '../components';
import Prismic from 'prismic-javascript';
import { client } from '../prismic-configuration';
import Slider from 'react-slick';

export default function Home({ posts, carousel }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  console.log('home', carousel);
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
          <section className='w-full z-0 rounded-lg overflow-hidden my-6'>
            <Slider {...settings}>
              {carousel.results.map((banner) => (
                <figure
                  key={banner.id}
                  className='w-full rounded-lg overflow-hidden'
                >
                  <img
                    className='w-full'
                    src={banner.data.banner.url}
                    alt={banner.data.banner.alt}
                  />
                </figure>
              ))}
            </Slider>
          </section>
          <section className='mb-6'>
            <div className='flex justify-between items-center mb-6'>
              <h1 className='text-3xl'>Últimas notícias</h1>
              <Link href='/noticias'>
                <a className='text-lg'>Ver todos</a>
              </Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
              {posts.results.map((post) => {
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
  const carousel = await client.query(
    Prismic.Predicates.at('document.type', 'carousel'),
    { orderings: '[my.post.date desc]' },
  );
  const posts = await client.query(
    Prismic.Predicates.at('document.type', 'blog_post'),
    { orderings: '[document.first_publication_date desc]', pageSize: 3 },
  );

  return {
    props: {
      posts,
      carousel,
    },
  };
};
