import { SEO } from '../../components';

export default function Conjoaad() {
  return (
    <>
      <SEO
        title='CONJOAAD 11ª Região'
        description='Acompanhe todos as informações e eventos do CONJOAAD da 11ª região!'
        link=''
      />
      <section className='w-11/12 lg:max-w-5xl mx-auto py-6 min-h-screen'>
        <h1 className='text-2xl text-center md:text-left mb-8'>
          CONJOAAD 11ª Região
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <article className='py-10 bg-gradient-to-l to-my-blue from-my-green font-sans rounded-lg cursor-pointer'>
            <h2 className='text-white text-5xl font-bold text-center'>2022</h2>
          </article>
          <article className='py-10 bg-gradient-to-l to-my-blue from-my-green font-sans rounded-lg cursor-pointer'>
            <h2 className='text-white text-5xl font-bold text-center'>2021</h2>
          </article>
        </div>
      </section>
    </>
  );
}
