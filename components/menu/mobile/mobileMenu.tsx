import React, { useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Backdrop, IconButton, Link, Modal } from '@mui/material';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import { useStyles } from './styles';
import { Image } from 'react-datocms';
import { IMobileMenu } from './types';
import { checkIfCurrentPage } from '../../../lib/helpers/checkIfCurrentPage';
import { stopBodyScroll } from '../../../lib/helpers/stopBodyScroll';

export default function MobileMenu({
  isOpen,
  setIsOpen,
  pages,
  socialLinks,
}: IMobileMenu) {
  const classes = useStyles();
  const router = useRouter();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    stopBodyScroll(isOpen);
  }, [isOpen]);

  return (
    <>
      <IconButton className={classes.button} onClick={handleClick}>
        <MenuIcon className={classes.buttonIcon} color="primary" />
      </IconButton>
      <Backdrop
        transitionDuration={300}
        open={isOpen}
        className={classes.backdrop}
      >
        <>
          <div className={classes.menuContainer}>
            {pages.map((page, index) => (
              <Link
                onClick={handleClick}
                variant="h2"
                underline="none"
                href={page.href}
                className={classNames(
                  classes.link,
                  checkIfCurrentPage(page.href, router.pathname)
                    ? classes.active
                    : classes.inActive
                )}
                key={index}
              >
                {page.title}
              </Link>
            ))}
          </div>
          <div className={classes.socialContainer}>
            {socialLinks.map((link, index) => (
              <Link href={link.link} key={index} className={classes.iconLink}>
                <Image
                  data={link.icon.responsiveImage}
                  className={classes.icon}
                />
              </Link>
            ))}
          </div>
        </>
      </Backdrop>
    </>
  );
}
