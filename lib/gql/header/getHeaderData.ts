import { request } from '../api';
import { HEADER_QUERY } from './query';

export async function getHeaderData() {
  const headerData = await request({ query: HEADER_QUERY });
  return headerData;
}
