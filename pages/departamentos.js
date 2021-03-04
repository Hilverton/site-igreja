import Head from 'next/head';
import { Layout, Card } from '../components';

export default function Departamentos() {
  return (
    <>
      <Head>
        <title>IEADAL-BB2 | Nossos departamentos</title>
        <meta
          name='og:description'
          content='Confira os departamentos/ministérios que compõem nossa igreja.'
          key='ogdesc'
        />
      </Head>
      <Layout>
        <section className='w-11/12 mx-auto py-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <Card title='Departamento Infantil Dedos de Davi' />
            <Card title='Departamento de Senhoras Mensageiras do Rei' />
            <Card title='Departamento de Senhores Gideões' />
            <Card title='Departamento Jovem Vasos de Honra' />
            <Card title='Coral Pedras Preciosas' />
            <Card title='Orquestra Celebrart' />
            <Card title='Unigesto Apocalipse' />
          </div>
        </section>
      </Layout>
    </>
  );
}
