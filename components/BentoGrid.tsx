"use client";

import { motion } from "framer-motion";

export default function BentoGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      initial="hidden"
      animate="show"
      className="grid gap-4 md:grid-cols-2"
    >
      {children}
    </motion.div>
  );
}