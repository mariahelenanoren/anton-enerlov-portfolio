import { Box, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { Image as DatoImage } from "react-datocms";
import { PaddingComponent } from "..";
import { useStyles } from "./styles";
import { IFooter } from "./types";
import Image from "next/image";

export default function Footer({ footer }: IFooter) {
	const classes = useStyles();
	const [date, setDate] = useState(Number);
	const getYear = () => setDate(new Date().getFullYear());

	useEffect(() => {
		getYear();
	}, []);

	return (
		<PaddingComponent>
			<div className={classes.footer}>
				<section className={classes.column}>
				<div className={classes.logo}>
					<Image
						layout="fill"
						src="/assets/logo-cropped.png"
						alt="logotype"
					></Image>
				</div>

				</section>
				<div className={classes.iconsContainer}>
				{footer.socialLinks.map((link, index) => (
					<Link key={index} href={link.link}>
							<DatoImage data={link.icon.responsiveImage}className={classes.socialIcons}></DatoImage>
						
					</Link>
				))}
				</div>
				<section className={classes.column}>
					<span className={classes.copyName}>&copy; Anton Enerlöv {date}</span>
				</section>
			</div>
		</PaddingComponent>
	);
}
