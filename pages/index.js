import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { Card, SEO } from '../components';
import Prismic from 'prismic-javascript';
import { client } from '../prismic-configuration';
import Slider from 'react-slick';

export default function Home({ posts, carousel, souls }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const link = 'https://www.portaladbeneditobentes2.com.br/';
  const reached_souls = souls.results[0].data.numero;
  const isPositive = 50 - reached_souls > 0;
  const remaining_souls = isPositive ? 50 - reached_souls : 0;
  return (
    <>
      <SEO
        title='Página inicial'
        description='Página inicial da Assembleia de Deus no Benedito Bentes 2. Confira nossos eventos, nossas postagens, horários e dias de cultos.'
        link={link}
      />
      <Head>
        <meta
          name='google-site-verification'
          content='PX3cmViKZZAZ--LX_vPwyb-rQYu-2z4bhpBS5RE08-o'
        />
      </Head>
      <div className='w-full py-2'>
        <section className='z-0 rounded-lg w-11/12 lg:max-w-5xl mx-auto overflow-hidden my-6'>
          <Slider {...settings}>
            {carousel.results.map((banner) => (
              <figure
                key={banner.id}
                className='w-full rounded-lg overflow-hidden'
              >
                <Image
                  className='w-full'
                  src={banner.data.banner.url}
                  alt={banner.data.banner.alt}
                  layout='responsive'
                  height={695}
                  width={1237}
                  priority
                />
              </figure>
            ))}
          </Slider>
        </section>
        <section className='mb-6 w-full bg-gradient-to-l to-my-orange from-my-yellow py-8'>
          <div className='w-11/12 lg:max-w-5xl mx-auto flex flex-col md:flex-row md:justify-between items-center'>
            <div className='w-full order-2 md:order-1 text-8xl md:w-1/2'>
              <p className='text-white text-center text-2xl md:text-4xl'>
                {reached_souls} almas alcançadas
              </p>
              {!isPositive && (
                <p className='text-white text-center text-lg md:text-2xl mt-2'>
                  Objetivo de 50 almas <br /> atingido e superado! <br />
                  Glória a Deus!!!
                </p>
              )}
            </div>
            <div className='relative order-1 md:order-2 mb-6 md:mb-0 w-full md:w-1/2 h-40'>
              <Image
                src='/assets/projeto.png'
                alt='Logo projeto'
                layout='fill'
                objectFit='contain'
                className='w-full'
                priority
              />
            </div>
          </div>
        </section>
        <section className='mb-6 w-11/12 lg:max-w-5xl mx-auto'>
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
                  navigateTo='noticias'
                />
              );
            })}
          </div>
        </section>
      </div>
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

  const souls = await client.query(
    Prismic.Predicates.at('document.type', 'project'),
  );

  return {
    props: {
      posts,
      carousel,
      souls,
    },
  };
};
