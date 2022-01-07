import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useStyles } from './styles';
import { OnScreen } from '../../lib/helpers/onScreen';

export default function AnimationContainer({
  children,
}: PropsWithChildren<{}>) {
  const classes = useStyles();
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
      className={classes.animationContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      ref={rootRef}
    >
      {children}
    </motion.div>
  );
}
