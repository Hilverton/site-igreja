import { Card, Layout } from '../components';

export default function Home() {
  return (
    <Layout>
      <div className='w-11/12 mx-auto py-2'>
        <section className='mb-6'>
          <div className='flex justify-between items-center mb-6'>
            <h1 className='text-3xl'>Últimas notícias</h1>
            <span className='text-lg'>Ver todos</span>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <Card />
            <Card />
            <Card />
          </div>
        </section>
      </div>
    </Layout>
  );
}
