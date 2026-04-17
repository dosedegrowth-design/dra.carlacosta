import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span className={cn("section-label inline-flex items-center gap-3", className)}>
      <span className="h-px w-8 bg-[var(--accent)]" aria-hidden />
      {children}
    </span>
  );
}
