"use client";
import { motion } from "framer-motion";
import {
  Code,
  Rocket,
  Database,
  FileCode,
} from "lucide-react";

const icons = {
  Code,
  Rocket,
  Database,
  FileCode,
};

interface CourseCardProps {
  title: string;
  progress: number;
  iconName: string;
}

export default function CourseCard({
  title,
  progress,
  iconName,
}: CourseCardProps) {

  // 👇 PUT IT HERE
  const Icon =
    icons[iconName as keyof typeof icons] || Code;

  return (
    <motion.article
  
  whileHover={{
    scale: 1.02,
    y: -4,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 20,
  }}
  className="
    rounded-3xl
    border
    border-zinc-800
    bg-gradient-to-br
    from-zinc-900
    to-zinc-950
    p-6
    hover:border-blue-500/50
hover:shadow-2xl
hover:shadow-blue-500/25
    transition-all
  "
>
      
      <Icon size={24} />

      <h3 className="mt-4 font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-zinc-400">
        Progress: {progress}%
      </p>

      <div className="mt-4 h-2 rounded-full bg-zinc-800">
       <motion.div
  initial={{ width: 0 }}
  animate={{ width: `${progress}%` }}
  transition={{
    duration: 1,
    ease: "easeOut",
  }}
  className="h-2 rounded-full bg-blue-500"
/>
      </div>

    </motion.article>
  );
}