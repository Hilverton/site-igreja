import Card from '../Card';

export default function RelatedContent({ contents, navigateToPage }) {
  return (
    <>
      <h1 className='font-bold text-xl mb-6'>Relacionados</h1>
      {contents.length === 0 && (
        <h1 className='text-lg'>Sem conteúdo relacionado</h1>
      )}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6'>
        {contents.length !== 0 &&
          contents.map((post) => {
            return (
              <Card
                key={post.id}
                title={post.data.titulo[0].text}
                description={post.data.descricao[0].text}
                imgUrl={post.data.image.url}
                altImg={post.data.image.alt}
                slug={post.uid}
                navigateTo={navigateToPage}
              />
            );
          })}
      </div>
    </>
  );
}
