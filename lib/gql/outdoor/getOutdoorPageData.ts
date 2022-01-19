import { request } from '../api';
import { OUTDOOR_QUERY } from './query';

export default async function getOutdoorPageData() {
  const data = await request({
    query: OUTDOOR_QUERY,
  });
  return data;
}
