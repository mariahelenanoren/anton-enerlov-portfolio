import { request } from '../api';
import { PROJECT_QUERY } from './query';

export const getProjectData = async (id: string | undefined) => {
	const data = await request({
		query: PROJECT_QUERY,
		variables: { id: id },
	});

	return data;
};
