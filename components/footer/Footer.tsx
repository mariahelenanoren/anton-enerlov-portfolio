import { Typography, Link as MuiLink } from '@mui/material';
import { useEffect, useState } from 'react';
import { Image as DatoImage } from 'react-datocms';
import { PaddingComponent } from '..';
import { useStyles } from './styles';
import { IFooter } from './types';
import Image from 'next/image';
import Link from 'next/link';

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
        <div className={classes.column}>
          <div className={classes.logo}>
            <Image
              layout="fill"
              objectFit="contain"
              src="/assets/logo-cropped.png"
              alt="logotype"
            ></Image>
          </div>
        </div>
        <div className={classes.iconsContainer}>
          {footer.socialLinks.map((link, index) => (
            <Link key={index} href={link.link} passHref>
              <MuiLink className={classes.link}>
                <DatoImage
                  data={link.icon.responsiveImage}
                  className={classes.socialIcons}
                ></DatoImage>
              </MuiLink>
            </Link>
          ))}
        </div>
        <div className={classes.column}>
          <Typography variant="body2">&copy; Anton Enerlöv {date}</Typography>
        </div>
      </div>
    </PaddingComponent>
  );
}
