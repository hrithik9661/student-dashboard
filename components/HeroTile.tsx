"use client";
import { motion } from "framer-motion";
export default function HeroTile() {
  return (
    <motion.section
  whileHover={{
    scale: 1.01,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 20,
  }}
>
      <h2 className="text-3xl font-bold">
        Welcome Back 
      </h2>

      <p className="mt-2 text-zinc-400">
        Ready to continue your learning journey?
      </p>

      <div className="mt-6 inline-flex items-center rounded-full bg-orange-500/10 px-4 py-2">
         12 Day Learning Streak
      </div>
    </motion.section>
  );
}