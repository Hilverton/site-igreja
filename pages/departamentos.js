import { Layout, Card, SEO } from '../components';

export default function Departamentos() {
  const link = 'http://portaladbeneditobentes2.com.br/departamentos';

  return (
    <>
      <SEO
        title='Nossos departamentos'
        description='Confira os departamentos/ministérios que compõem nossa igreja.'
        link={link}
      />
      <Layout>
        <section className='w-11/12 mx-auto py-6'>
          {false && (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
              <Card title='Departamento Infantil Dedos de Davi' />
              <Card title='Departamento de Senhoras Mensageiras do Rei' />
              <Card title='Departamento de Senhores Gideões' />
              <Card title='Departamento Jovem Vasos de Honra' />
              <Card title='Coral Pedras Preciosas' />
              <Card title='Orquestra Celebrart' />
              <Card title='Unigesto Apocalipse' />
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
