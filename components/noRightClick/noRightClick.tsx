import React, { PropsWithChildren, useEffect } from 'react';
import { useStyles } from './styles';

export default function NoRightClick({ children }: PropsWithChildren<{}>) {
	const classes = useStyles();

	useEffect(() => {
		const images = document.getElementsByClassName('noRightClick');
		Array.from(images).map((images) => {
			if (images) {
				images.addEventListener('contextmenu', (e) => e.preventDefault());
			}
		});
		[];
	});

	return <div className={classes.noRightClick}>{children}</div>;
}
