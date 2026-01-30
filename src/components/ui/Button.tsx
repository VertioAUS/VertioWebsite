"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonHover } from "@/lib/animations";
import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  href,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-primary text-background hover:bg-primary-light focus:ring-primary",
    secondary:
      "bg-card text-foreground border border-border hover:border-border-hover hover:bg-card-elevated focus:ring-primary",
    outline:
      "border border-border bg-transparent text-foreground hover:bg-card hover:border-border-hover focus:ring-primary",
    ghost: "bg-transparent text-foreground hover:bg-card focus:ring-primary",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    const isHash = href.startsWith("#");
    return (
      <motion.div
        variants={buttonHover}
        initial="rest"
        whileHover="hover"
        whileTap="tap"
      >
        <Link
          href={href}
          className={combinedClassName}
          onClick={(e) => {
            if (!isHash) return;
            e.preventDefault();
            const el = document.querySelector(href);
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
              window.history.pushState(null, "", href);
            }
          }}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={combinedClassName}
      variants={buttonHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
    >
      {children}
    </motion.button>
  );
}
