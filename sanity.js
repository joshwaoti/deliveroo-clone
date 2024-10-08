import { createClient } from '@sanity/client';
import { ImageUrlBuilder } from '@sanity/image-url';

const client = createClient({
  projectId: 'p14wgios',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// sanity cors add http://localhost:3000

export default client;
