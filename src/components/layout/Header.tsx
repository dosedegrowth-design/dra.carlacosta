"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Páginas que abrem com Hero escuro — Header precisa inverter cores até o scroll
  const isDarkHeroPage = pathname === "/parceria";

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

  // Quando está numa page secundária e clica num link de âncora, manda pra home primeiro
  const getHref = (href: string) => {
    if (href.startsWith("#") && pathname !== "/") {
      return `/${href}`;
    }
    return href;
  };

  // Cores dinâmicas: em pages com Hero escuro, texto branco enquanto não scrollou
  const isLight = isDarkHeroPage && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-40 transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[var(--border)] py-3 shadow-sm"
            : isDarkHeroPage
              ? "bg-transparent py-4 md:py-6"
              : "bg-[var(--bg)]/80 backdrop-blur-sm py-4 md:py-6"
        )}
      >
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 md:gap-4 group" aria-label="Ir para página inicial">
            <span
              className={cn(
                "grid place-items-center rounded-full transition-all duration-500",
                scrolled
                  ? "w-12 h-12 md:w-14 md:h-14"
                  : "w-14 h-14 md:w-16 md:h-16 lg:w-[72px] lg:h-[72px]",
                isLight ? "bg-white/95 p-1" : ""
              )}
            >
              <Image
                src="/images/logo/logo-carla.png"
                alt="Dra. Carla Costa"
                width={80}
                height={80}
                className="w-full h-full object-contain"
                priority
              />
            </span>
            <span
              className={cn(
                "font-display tracking-tight transition-all duration-500 leading-none",
                scrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl lg:text-[1.65rem]",
                isLight ? "text-white" : "text-[var(--primary)]"
              )}
            >
              Dra. Carla Costa
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={getHref(link.href)}
                className={cn(
                  "text-sm transition-colors",
                  isLight
                    ? "text-white/90 hover:text-[var(--accent-light)]"
                    : "text-[var(--text)] hover:text-[var(--accent-dark)]"
                )}
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
              className={cn(
                "hidden md:inline-flex btn-compact",
                isLight
                  ? "btn-secondary !text-white !border-white hover:!bg-white hover:!text-[var(--primary)]"
                  : "btn-accent"
              )}
            >
              Agendar
            </a>
            <button
              type="button"
              aria-label="Abrir menu"
              onClick={() => setOpen(true)}
              className={cn(
                "lg:hidden w-10 h-10 grid place-items-center transition-colors",
                isLight ? "text-white" : "text-[var(--primary)]"
              )}
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
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="py-4 text-2xl font-display border-b border-white/10 hover:text-[var(--accent-light)] transition-colors"
          >
            Início
          </Link>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={getHref(link.href)}
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
