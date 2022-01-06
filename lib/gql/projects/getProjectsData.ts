import { request } from '../api';
import { PROJECTS_QUERY } from './query';

export default async function getProjectsData(category?: string) {
  const data = await request({
    query: PROJECTS_QUERY,
    variables: { category: category },
  });
  return data;
}
