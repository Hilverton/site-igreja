import { SEO, PostBlog, Loading } from '../../../components';
import Prismic from 'prismic-javascript';
import { client } from '../../../prismic-configuration';

export default function UIDConjoaad({ year, post }) {
  const link = `https://www.portaladbeneditobentes2.com.br/conjoaad/${year}/${post.uid}`;

  return (
    <>
      <SEO
        title={`Conjoaad - ${post.data.titulo[0].text}`}
        description={post.data.descricao[0].text}
        image={post.data.image.url}
        link={link}
      />
      <section className='w-11/12 lg:max-w-5xl mx-auto py-6 md:px-32'>
        <div className='grid grid-cols-1 gap-6'>
          <PostBlog post={post} />
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { year, uid } = context.params;
  const post = await client.getByUID('conjoaad_post', `${uid}`, {
    lang: 'pt-br',
  });

  return {
    props: {
      year,
      post,
    },
  };
};
