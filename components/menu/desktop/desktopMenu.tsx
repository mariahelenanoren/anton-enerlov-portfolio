import { Link } from '@mui/material';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { checkIfCurrentPage } from '../../../lib/helpers/checkIfCurrentPage';
import { useStyles } from './styles';
import { IDesktopMenu } from './types';

export default function DesktopMenu({ pages }: IDesktopMenu) {
  const classes = useStyles();
  const router = useRouter();
  return (
    <>
      {pages.map((page, index) => (
        <Link
          variant="body2"
          underline="none"
          href={page.href}
          className={classNames(
            classes.link,
            checkIfCurrentPage(page.href, router.pathname)
              ? classes.active
              : undefined
          )}
          key={index}
        >
          {page.title}
        </Link>
      ))}
    </>
  );
}
