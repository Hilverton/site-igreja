import { Card, SEO } from '../components';

export default function Departamentos() {
  const link = 'https://www.portaladbeneditobentes2.com.br/departamentos';

  return (
    <>
      <SEO
        title='Nossos departamentos'
        description='Confira os departamentos/ministérios que compõem nossa igreja.'
        link={link}
      />
      <section className='w-11/12 lg:max-w-5xl mx-auto py-6'>
        <div className='flex justify-center items-center h-screen'>
          <h1 className='text-2xl'>Página em construção 🚧</h1>
        </div>
      </section>
    </>
  );
}
