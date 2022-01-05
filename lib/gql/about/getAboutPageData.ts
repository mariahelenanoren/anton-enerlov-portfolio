import { request } from '../api';
import { ABOUTPAGE_QUERY } from './query';

export default async function getAboutPageData() {
  const data = await request({ query: ABOUTPAGE_QUERY });
  return data;
}
