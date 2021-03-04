import Head from 'next/head';
import { Layout, Card } from '../../components';

export default function Noticia() {
  return (
    <>
      <Head>
        <title>IEADAL-BB2 | Notícia</title>
      </Head>
      <Layout>
        <section className='w-11/12 mx-auto py-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            <div className='col-span-2 content'>
              <h1 className='font-bold text-2xl mb-2'>Título do conteúdo</h1>
              <span>Rápida descrição</span>
              <figure className='my-4 rounded-lg overflow-hidden'>
                <img
                  className='w-full h-full'
                  src='https://dummyimage.com/720x400'
                  alt='blog'
                />
              </figure>
              <p>
                É um facto estabelecido de que um leitor é distraído pelo
                conteúdo legível de uma página quando analisa a sua mancha
                gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais
                ou menos normal de letras, ao contrário do uso de "Conteúdo
                aqui, conteúdo aqui", tornando-o texto legível. Muitas
                ferramentas de publicação electrónica e editores de páginas web
                usam actualmente o Lorem Ipsum como o modelo de texto usado por
                omissão, e uma pesquisa por "lorem ipsum" irá encontrar muitos
                websites ainda na sua infância. Várias versões têm evoluído ao
                longo dos anos, por vezes por acidente, por vezes
                propositadamente (como no caso do humor).
              </p>
              <p>
                Existem muitas variações das passagens do Lorem Ipsum
                disponíveis, mas a maior parte sofreu alterações de alguma
                forma, pela injecção de humor, ou de palavras aleatórias que nem
                sequer parecem suficientemente credíveis. Se vai usar uma
                passagem do Lorem Ipsum, deve ter a certeza que não contém nada
                de embaraçoso escondido no meio do texto. Todos os geradores de
                Lorem Ipsum na Internet acabam por repetir porções de texto
                pré-definido, como necessário, fazendo com que este seja o
                primeiro verdadeiro gerador na Internet. Usa um dicionário de
                200 palavras em Latim, combinado com uma dúzia de modelos de
                frases, para gerar Lorem Ipsum que pareçam razoáveis. Desta
                forma, o Lorem Ipsum gerado é sempre livre de repetição, ou de
                injecção humorística, etc.
              </p>
              <div className='flex items-center'>
                <figure className='mb-4'>
                  <img
                    className='w-10 h-10 rounded-full'
                    src='https://dummyimage.com/720x400'
                    alt='blog'
                  />
                </figure>
                <span className='ml-4'>Equipe de Mídia</span>
              </div>
            </div>
            <div className='space-y-6'>
              <h1 className='font-bold text-xl'>Relacionados</h1>
              <div className='h-96'>
                <Card title='Culto de Doutrina' />
              </div>
              <div className='h-96'>
                <Card title='Culto de Rua' />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
