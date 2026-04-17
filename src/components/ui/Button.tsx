import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "accent";

interface ButtonBaseProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

const classForVariant: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
};

export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonBaseProps & ComponentProps<"button">) {
  return (
    <button className={cn(classForVariant[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  children,
  className,
  href,
  ...props
}: ButtonBaseProps & ComponentProps<typeof Link>) {
  return (
    <Link className={cn(classForVariant[variant], className)} href={href} {...props}>
      {children}
    </Link>
  );
}
