"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const whatsappHref = `https://wa.me/${SITE.whatsapp}`;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-[var(--border)] py-3"
            : "bg-transparent py-4 md:py-6"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 md:gap-4 group">
            <Image
              src="/images/logo/logo-carla.png"
              alt="Dra. Carla Costa"
              width={80}
              height={80}
              className={cn(
                "transition-all duration-500",
                scrolled ? "w-12 h-12 md:w-14 md:h-14" : "w-14 h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px]"
              )}
              priority
            />
            <span className={cn(
              "font-display tracking-tight text-[var(--primary)] transition-all duration-500 leading-none",
              scrolled
                ? "text-lg md:text-xl"
                : "text-xl md:text-2xl lg:text-[1.65rem]"
            )}>
              Dra. Carla Costa
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text)] hover:text-[var(--accent-dark)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex btn-accent btn-compact"
            >
              Agendar
            </a>
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
              className="lg:hidden w-10 h-10 grid place-items-center text-[var(--primary)]"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-[var(--primary)] text-white transition-all duration-500 lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <span className="font-display text-xl">Menu</span>
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="w-10 h-10 grid place-items-center"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-2 p-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-4 text-2xl font-display border-b border-white/10 hover:text-[var(--accent-light)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 btn-accent"
          >
            Agendar pelo WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
}
