import Head from 'next/head';

export default function SEO({ title, description, image = '', link }) {
  const pageTitle = `${title}`;

  return (
    <Head>
      <title>{pageTitle}</title>
      <link rel='canonical' href={link} />
      <meta httpEquiv='Content-Language' content='pt-br' />
      <meta httpEquiv='x-ua-compatible' content='IE=edge,chrome=1' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=ISO-8859-1' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta
        name='title'
        content='https://portaladbeneditobentes2.com.br/ - Igreja Assembleia de Deus no Benedito Bentes 2'
      />
      {description && <meta name='description' content={description} />}
      {image && <meta name='image' content={image} />}
      <meta name='MobileOptimized' content='320' />
      <meta name='HandheldFriendly' content='True' />
      <meta name='theme-color' content='#121214' />
      <meta name='msapplication-TileColor' content='#121214' />
      <meta name='referrer' content='no-referrer-when-downgrade' />
      <meta name='google' content='notranslate' />
      <meta property='og:title' content={pageTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:locale' content='pt_BR' />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content={pageTitle} />
      <meta property='og:image' content={image} />
      <meta property='og:image:secure_url' content={image} />
      <meta property='og:image:alt' content='Thumbnail' />
      <meta property='og:image:type' content='image/png' />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
    </Head>
  );
}
