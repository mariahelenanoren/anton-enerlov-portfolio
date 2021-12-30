import { Link } from '@mui/material';
import Image from 'next/image';
import { PaddingComponent } from '..';
import { useStyles } from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    <PaddingComponent>
      <div className={classes.headerContainer}>
        <div className={classes.logoContainer}>
          <Image
            layout="fill"
            objectFit="contain"
            alt="logotype"
            src="/assets/logo-cropped.png"
          ></Image>
        </div>
        <nav>
          <ul className={classes.menu}>
            <li>
              <Link href="/">Outdoor</Link>
            </li>
            <li>
              <Link href="/lifestyle">Lifestyle</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </PaddingComponent>
  );
}
