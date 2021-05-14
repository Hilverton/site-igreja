import Image from 'next/image';
import { RichText } from 'prismic-reactjs';

export default function PostBlog({ post }) {
  return (
    <>
      <h1 className='font-bold text-2xl mb-2'>{post.data.titulo[0].text}</h1>
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
            Culto
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
    </>
  );
}
