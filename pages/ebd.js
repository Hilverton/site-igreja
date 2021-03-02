import { Layout, Card } from '../components';

export default function Ebd() {
  return (
    <Layout>
      <section className='w-11/12 mx-auto py-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          <Card title='Lição de Adultos' />
          <Card title='Lição de Jovens' />
          <Card title='Lição dos Novos Crentes' />
          <Card title='Lição Juvenil' />
        </div>
      </section>
    </Layout>
  );
}
