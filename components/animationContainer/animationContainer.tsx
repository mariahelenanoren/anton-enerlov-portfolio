import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { OnScreen } from '../../lib/helpers/onScreen';

export default function AnimationContainer({
  children,
}: PropsWithChildren<{}>) {
  const controls = useAnimation();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const onScreen = OnScreen(rootRef);

  useEffect(() => {
    if (onScreen) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: 'easeOut',
        },
      });
    }
  }, [controls, onScreen]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      ref={rootRef}
    >
      {children}
    </motion.div>
  );
}
