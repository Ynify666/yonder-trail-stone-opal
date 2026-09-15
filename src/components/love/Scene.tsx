import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Scene({
  children,
  className,
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.section
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18, filter: "blur(8px)" }}
      animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12, filter: "blur(5px)" }}
      transition={{ duration: reduce ? 0.16 : 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative z-10 mx-auto flex min-h-dvh w-full flex-col items-center justify-center px-5 pt-16 pb-28",
        wide ? "max-w-xl" : "max-w-lg",
        className,
      )}
    >
      {children}
    </motion.section>
  );
}
