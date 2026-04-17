"use client";

import type { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

type Variant = "fadeUp" | "fadeIn" | "scaleIn" | "slideLeft" | "slideRight";

interface AnimateOnScrollProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
}

export function AnimateOnScroll({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
}: AnimateOnScrollProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      data-variant={variant}
      data-visible={isInView}
      className={cn("animate-hidden", isInView && "animate-visible", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
