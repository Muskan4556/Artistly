"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = resolvedTheme === "dark";
  const tooltipText = isDark ? "Light mode" : "Dark mode";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative border-none hover:bg-gray-100 dark:hover:bg-gray-800"
      title={tooltipText}
    >
      <motion.div
        key={resolvedTheme}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0, rotate: 180 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
      >
        {isDark ? (
          <Moon className="h-[1.2rem] w-[1.2rem] text-gray-700 dark:text-gray-300" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem] text-gray-700 dark:text-gray-300" />
        )}
      </motion.div>
      <span className="sr-only">{tooltipText}</span>
    </Button>
  );
}
