import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="container-custom py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl mb-4">{SITE.name}</h3>
            <p className="text-white/70 max-w-md leading-relaxed">
              Anestesiologia e Medicina da Dor com cuidado, segurança e humanização — para clínicas
              parceiras e pacientes.
            </p>
            <p className="mt-6 text-sm text-white/50">{SITE.crm}</p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-white/60 mb-4">Navegação</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[var(--accent-light)] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/parceria" className="hover:text-[var(--accent-light)] transition-colors">
                  Parceria com Clínicas
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[var(--accent-light)] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-white/60 mb-4">Contato</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{SITE.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-[var(--accent-light)]">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>{SITE.address}</span>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 grid place-items-center rounded-full border border-white/20 hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 grid place-items-center rounded-full border border-white/20 hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-sm text-white/50">
          <p>
            © {year} {SITE.name}. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://dosedegrowth.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent-light)]"
            >
              Dose de Growth
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
