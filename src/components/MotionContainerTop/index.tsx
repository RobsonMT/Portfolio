import { motion } from "framer-motion";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

export const MotionContainerTop = (props: IProps) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 0, opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {props.children}
    </motion.div>
  );
};
