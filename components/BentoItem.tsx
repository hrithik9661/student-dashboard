"use client";

import { motion } from "framer-motion";

export default function BentoItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}