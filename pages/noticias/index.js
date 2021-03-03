import Head from 'next/head';
import { Layout, Card } from '../../components';

export default function Noticias() {
  return (
    <>
      <Head>
        <title>IEADAL-BB2 | Notícias</title>
      </Head>
      <Layout>
        <section className='w-11/12 mx-auto py-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <div className='col-span-1 md:col-span-2 space-y-6'>
              <Card title='Culto de Doutrina' big />
              <Card title='Culto Evangelístico' big />
              <Card title='Culto de Doutrina' big />
              <Card title='Culto de Rua' big />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
