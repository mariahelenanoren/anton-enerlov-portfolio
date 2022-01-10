import { MutableRefObject, useEffect, useState } from 'react';

export const OnScreen = (
  ref: MutableRefObject<HTMLDivElement | null>,
  rootMargin = '0px'
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    let reference: Element | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
      reference = ref.current;
    }
    return () => {
      if (reference) {
        observer.unobserve(reference);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
};
