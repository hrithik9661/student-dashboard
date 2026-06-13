"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  Menu,
} from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [active, setActive] = useState("Dashboard");

  const items = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Courses",
      icon: BookOpen,
    },
    {
      label: "Analytics",
      icon: BarChart3,
    },
    {
      label: "Settings",
      icon: Settings,
    },
  ];

  return (
    <aside
      className={`
        relative
        min-h-screen
        border-r
        border-zinc-800
        bg-zinc-950
        p-4
        transition-all
        duration-300
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mb-6 rounded-lg p-2 hover:bg-zinc-800"
      >
        <Menu size={20} />
      </button>

      {!collapsed && (
        <h1 className="mb-8 text-xl font-bold">
          LearnX
        </h1>
      )}

      <nav>
        <ul className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label}>
                <button
                  onClick={() =>
                    setActive(item.label)
                  }
                  className="
                    relative
                    flex
                    w-full
                    items-center
                    gap-3
                    overflow-hidden
                    rounded-xl
                    p-3
                  "
                >
                  {active === item.label && (
                    <motion.div
                      layoutId="sidebar-highlight"
                      className="
                        absolute
                        inset-0
                        rounded-xl
                        bg-blue-500/20
                        border
                        border-blue-500/30
                      "
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    />
                  )}

                  <Icon
                    size={20}
                    className="relative z-10"
                  />

                  {!collapsed && (
                    <span className="relative z-10">
                      {item.label}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}