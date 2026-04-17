"use client";

import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";

export function WhatsAppFloat() {
  const message = encodeURIComponent(
    "Olá! Gostaria de saber mais sobre os serviços da Dra. Carla Costa."
  );
  const href = `https://wa.me/${SITE.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-110 transition-transform duration-300"
    >
      <MessageCircle className="w-7 h-7" strokeWidth={1.8} />
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
    </a>
  );
}
