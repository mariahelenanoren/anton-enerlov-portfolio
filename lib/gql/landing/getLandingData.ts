import { request } from '../api';
import { LANDING_QUERY } from './query';

export default async function getLandingData() {
  const data = await request({ query: LANDING_QUERY });
  return data;
}
