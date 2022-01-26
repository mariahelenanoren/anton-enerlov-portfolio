import classNames from 'classnames';
import { Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { checkIfCurrentPage } from '../../../../lib/helpers/checkIfCurrentPage';
import { useStyles } from './styles';
import { IDesktopMenu } from './types';

export default function DesktopMenu({ pages }: IDesktopMenu) {
  const classes = useStyles();
  const router = useRouter();
  return (
    <>
      {pages.map((page, index) => (
        <Link href={page.href} key={index} passHref>
          <MuiLink
            variant="body2"
            underline="none"
            className={classNames(
              classes.link,
              checkIfCurrentPage(page.href, router.pathname)
                ? classes.active
                : undefined
            )}
          >
            {page.title}
          </MuiLink>
        </Link>
      ))}
    </>
  );
}
