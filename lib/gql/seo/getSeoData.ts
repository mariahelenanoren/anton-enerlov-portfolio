import { request } from '../api';
import { SEO_QUERY } from './query';

export default async function getSeoData() {
  const data = await request({
    query: SEO_QUERY,
  });
  return data;
}
