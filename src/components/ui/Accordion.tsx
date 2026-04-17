"use client";

import { useState, type ReactNode } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({ question, children, defaultOpen = false }: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[var(--border)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={cn(
          "w-full flex items-start justify-between gap-6 py-6 text-left group",
          "hover:text-[var(--accent-dark)] transition-colors"
        )}
      >
        <span className="font-display text-lg md:text-xl text-[var(--primary)] leading-tight group-hover:text-[var(--accent-dark)] transition-colors">
          {question}
        </span>
        <span
          className={cn(
            "flex-shrink-0 w-9 h-9 grid place-items-center rounded-full border border-[var(--border)] transition-all duration-300",
            open && "bg-[var(--primary)] text-white border-[var(--primary)] rotate-90"
          )}
        >
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12 text-[var(--text-muted)] leading-relaxed">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
