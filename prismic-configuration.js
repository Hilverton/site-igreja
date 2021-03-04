import Prismic from 'prismic-javascript';

export const apiEndpoint = process.env.NEXT_PUBLIC_API_URL;

export const accessToken = '';

export const client = Prismic.client(apiEndpoint, { accessToken });
