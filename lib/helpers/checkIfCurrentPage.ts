import { NextRouter } from 'next/router';

export const checkIfCurrentPage = (href: string, pathname: string) => {
  if (pathname === href) {
    return true;
  }
  return false;
};
