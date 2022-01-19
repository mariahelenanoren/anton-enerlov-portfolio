import React, { useEffect } from 'react';

export default function ScrollToTop() {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    console.log(window.scrollY);
  }, []);

  return null;
}
