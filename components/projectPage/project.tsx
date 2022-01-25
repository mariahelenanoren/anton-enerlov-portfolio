import { Typography } from '@mui/material';
import { PaddingComponent } from '../paddingComponent';
import { useStyles } from './styles';
import { Image } from 'react-datocms';
import { ProjectInfo } from '../projectInfo';
import { ImageGrid } from '../imageGrid';
import { MoreIn } from '../moreIn';
import { IProject } from '../../lib/gql/project/types';
import { PreviewModal } from '../previewModal';
import { AnimationContainer } from '../animationContainer';
import { DisableCopy } from '../disableCopy';
import { ProjectVideo } from '../projectVideos';

interface IProjectPage {
	project: IProject;
	allProjects: IProject[];
}

export default function ProjectPage({ project, allProjects }: IProjectPage) {
	const classes = useStyles();

	return (
		<div className={classes.projectContainer}>
			<PaddingComponent>
				<div className={classes.titleContainer}>
					<Typography variant="h1" textAlign={'center'}>
						{project.title}
					</Typography>
				</div>
			</PaddingComponent>
			<AnimationContainer>
				<PreviewModal image={project.featuredImage}>
					<DisableCopy>
						<Image
							data={project.featuredImage.responsiveImage}
							className={classes.firstImage}
						/>
					</DisableCopy>
				</PreviewModal>
			</AnimationContainer>
			<ProjectInfo
				client={project.client}
				productionCompany={project.productionCompany}
				model={project.model}
				product={project.product}
				producer={project.producer}
				agency={project.agency}
				retouch={project.retouch}
			/>

			<ImageGrid images={project.images} videos={project.videos} />

			<MoreIn allProjects={allProjects} id={project.id} />
		</div>
	);
}
