import React from 'react';
import { Link, Box, AppBar, Toolbar } from '@mui/material';
import classNames from 'classnames';
import Image from 'next/image';
import { PaddingComponent } from '..';
import { useStyles } from './styles';
import { useRouter } from 'next/router';

export default function Header() {
  const classes = useStyles();
  const router = useRouter();

  const checkIfCurrentPage = (href: string) => {
    if (router.pathname === href) {
      return true;
    }
    return false;
  };

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
      <Box>
        <AppBar position="relative" className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.logoContainer}>
              <Image
                layout="fill"
                objectFit="contain"
                alt="logotype"
                src="/assets/logo-cropped.png"
              ></Image>
            </div>
            <div>
              {pages.map((page, index) => (
                <Link
                  variant="body2"
                  underline="none"
                  href={page.href}
                  className={classNames(
                    classes.link,
                    checkIfCurrentPage(page.href) ? classes.active : undefined
                  )}
                  key={index}
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </PaddingComponent>
  );
}
