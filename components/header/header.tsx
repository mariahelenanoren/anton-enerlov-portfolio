import React, { useState } from 'react';
import { useTheme } from '@mui/styles';
import {
  AppBar,
  Toolbar,
  Theme,
  useMediaQuery,
  Link as MuiLink,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { PaddingComponent } from '../paddingComponent';
import { DesktopMenu, MobileMenu } from './menu';
import { ISocialLinks } from './types';
import { useStyles } from './styles';

export default function Header({ socialLinks }: ISocialLinks) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const classes = useStyles();
  const theme: Theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.only('xs'));

  const pages = [
    {
      title: 'Outdoor',
      href: '/',
    },
    {
      title: 'Lifestyle',
      href: '/lifestyle',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ];

  return (
    <PaddingComponent>
      <AppBar
        position="relative"
        color="transparent"
        className={classes.appbar}
        elevation={0}
      >
        <Toolbar className={classes.toolbar}>
          <div className={classes.logoContainer}>
            <Link href="/" passHref>
              <MuiLink>
                <Image
                  layout="fill"
                  objectFit="contain"
                  alt="logotype"
                  src="/assets/logo-cropped.png"
                ></Image>
              </MuiLink>
            </Link>
          </div>
          <div>
            {!mobile ? (
              <DesktopMenu pages={pages} />
            ) : (
              <MobileMenu
                socialLinks={socialLinks}
                pages={pages}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            )}
          </div>
        </Toolbar>
      </AppBar>
    </PaddingComponent>
  );
}
