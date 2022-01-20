import { request } from '../api';
import { LIFESTYLE_QUERY } from './query';

export default async function getLifestylePageData() {
  const data = await request({
    query: LIFESTYLE_QUERY,
  });
  return data;
}
