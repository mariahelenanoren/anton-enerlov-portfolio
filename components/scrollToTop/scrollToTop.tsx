import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ScrollToTop({ loading }: { loading: boolean }) {
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      window.scrollTo(0, 0);
    }
  }, [loading]);

  return null;
}
