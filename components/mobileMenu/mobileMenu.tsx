import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Backdrop, IconButton, Link, Modal } from '@mui/material';
import { useRouter } from 'next/router';
import { checkIfCurrentPage } from '../../lib/helpers/checkIfCurrentPage';
import classNames from 'classnames';
import { useStyles } from './styles';

interface IMobileMenu {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
  pages: {
    title: string;
    href: string;
  }[];
}

export default function MobileMenu({ isOpen, setIsOpen, pages }: IMobileMenu) {
  const classes = useStyles();
  const router = useRouter();
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconButton className={classes.button} onClick={handleClick}>
        <MenuIcon className={classes.buttonIcon} color="primary" />
      </IconButton>
      <Modal
        open={true}
        className={classNames(
          classes.modal,
          isOpen ? classes.openModal : classes.closedModal
        )}
      >
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
      </Modal>
    </>
  );
}
