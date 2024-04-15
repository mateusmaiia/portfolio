import sanityCLient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityCLient({
   // eslint-disable-next-line no-undef
   projectId: process.env.REACT_APP__SANITY_PROJECT_ID,
   dataset: 'production',
   apiVersion: '2024-02-01',
   useCdn: true,
   // eslint-disable-next-line no-undef
   token: process.env.REACT_APP__SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
