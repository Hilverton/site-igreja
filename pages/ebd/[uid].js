import { useRouter } from 'next/router';
import { SEO, RelatedContent, PostBlog } from '../../components';
import Prismic from 'prismic-javascript';
import { client } from '../../prismic-configuration';

export default function Noticia({ post, posts }) {
  const router = useRouter();
  if (router.isFallback) return <div>Carregando...</div>;

  const link = `https://www.portaladbeneditobentes2.com.br/ebd/${post.uid}`;

  return (
    <>
      <SEO
        title={`Escola Bíblica Dominical - ${post.data.titulo[0].text}`}
        description={post.data.descricao[0].text}
        image={post.data.image.url}
        link={link}
      />
      <section className='w-11/12 lg:max-w-5xl mx-auto py-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 space-y-6 md:space-y-0 md:gap-6'>
          <div className='col-span-2 content'>
            <PostBlog post={post} />
          </div>
          <div className='col-span-2 md:col-span-1'>
            <RelatedContent contents={posts.results} navigateToPage='ebd' />
          </div>
        </div>
      </section>
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
    fallback: true,
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
