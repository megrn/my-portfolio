// components/PageTransition.jsx
import { motion } from "framer-motion";

export default function PageTransition({ children, keyValue }) {
  return (
    <motion.div
      key={keyValue}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
