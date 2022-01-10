import React, { useState } from 'react';
import {
  Link,
  Box,
  AppBar,
  Toolbar,
  Theme,
  useMediaQuery,
} from '@mui/material';
import classNames from 'classnames';
import Image from 'next/image';
import { MobileMenu, PaddingComponent } from '..';
import { useStyles } from './styles';
import { useRouter } from 'next/router';
import { useTheme } from '@mui/styles';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const classes = useStyles();
  const router = useRouter();
  const theme: Theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.only('xs'));

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
              {!mobile ? (
                <>
                  {pages.map((page, index) => (
                    <Link
                      variant="body2"
                      underline="none"
                      href={page.href}
                      className={classNames(
                        classes.link,
                        checkIfCurrentPage(page.href)
                          ? classes.active
                          : undefined
                      )}
                      key={index}
                    >
                      {page.title}
                    </Link>
                  ))}
                </>
              ) : (
                <MobileMenu
                  pages={pages}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                />
              )}
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </PaddingComponent>
  );
}
