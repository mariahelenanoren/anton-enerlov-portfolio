import React, { useState } from 'react';
import { useTheme } from '@mui/styles';
import {
  Box,
  AppBar,
  Toolbar,
  Theme,
  useMediaQuery,
  Link,
} from '@mui/material';
import Image from 'next/image';
import { PaddingComponent } from '../paddingComponent';
import { ISocialLinks } from './types';
import { useStyles } from './styles';
import { DesktopMenu, MobileMenu } from '../menu';

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
          <Link href="/">
            <div className={classes.logoContainer}>
              <Image
                layout="fill"
                objectFit="contain"
                alt="logotype"
                src="/assets/logo-cropped.png"
              ></Image>
            </div>
          </Link>
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
