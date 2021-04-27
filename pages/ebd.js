import { Layout, Card, SEO } from '../components';

export default function Ebd() {
  const link = 'http://portaladbeneditobentes2.com.br/ebd';

  return (
    <>
      <SEO
        title='Escola Bíblica Dominical'
        description='Tudo sobre os eventos e principais acontecimentos da nossa escola bíblica dominical.'
        link={link}
      />
      <Layout>
        <section className='w-11/12 mx-auto py-6'>
          {false && (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
              <Card title='Lição de Adultos' />
              <Card title='Lição de Jovens' />
              <Card title='Lição dos Novos Crentes' />
              <Card title='Lição Juvenil' />
            </div>
          )}
          <div className='flex justify-center items-center h-screen'>
            <h1 className='text-2xl'>Página em construção 🚧</h1>
          </div>
        </section>
      </Layout>
    </>
  );
}
