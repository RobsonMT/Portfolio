import { motion } from "framer-motion";
import React from "react";

interface IProps {
  children: React.ReactNode;
}

export const MotionContainer = (props: IProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {props.children}
    </motion.div>
  );
};
