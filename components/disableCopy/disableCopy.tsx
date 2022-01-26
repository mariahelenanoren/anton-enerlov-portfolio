import React, { PropsWithChildren, useEffect } from 'react';

export default function DisableCopy({ children }: PropsWithChildren<{}>) {
  useEffect(() => {
    const images = document.getElementsByClassName('noContextMenu');

    Array.from(images).map((images) => {
      if (images) {
        images.addEventListener('contextmenu', (e) => e.preventDefault());
      }
    });
    [];
  });

  return <div className={'noContextMenu'}>{children}</div>;
}
