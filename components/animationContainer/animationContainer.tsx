import React, { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { useStyles } from './styles';

export default function AnimationContainer({
  children,
}: PropsWithChildren<{}>) {
  const classes = useStyles();
  return (
    <motion.div
      className={classes.animationContainer}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
    >
      {children}
    </motion.div>
  );
}
