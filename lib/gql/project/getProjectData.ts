import { request } from '../api';
import { PROJECT_QUERY } from './query';

export const getProjectData = async (title: string) => {
  const data = await request({
    query: PROJECT_QUERY,
    variables: { title: title },
  });

  return data;
};
