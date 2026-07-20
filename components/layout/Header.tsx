"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { site } from "@/data/site";

/**
 * Header transparent au chargement, fond opaque + hauteur réduite au scroll.
 * Menu mobile plein écran avec stagger des liens.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Sur l'accueil le header survole une image sombre → texte chalk au repos.
  const onDarkHero = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile à chaque navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useGSAP(
    () => {
      if (!open || !menuRef.current) return;
      gsap.from(menuRef.current.querySelectorAll("[data-menu-link]"), {
        yPercent: 110,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.07,
      });
    },
    { scope: menuRef, dependencies: [open] }
  );

  const linkColor = onDarkHero
    ? "text-chalk hover:text-chalk/70"
    : "text-ink hover:text-clay";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ease-out ${
        scrolled
          ? "border-b border-line bg-chalk/95 py-3 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-gutter">
        <Link
          href="/"
          className={`font-display text-2xl transition-colors duration-300 ${
            onDarkHero ? "text-chalk" : "text-ink"
          }`}
        >
          {site.name}
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-10 lg:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-sans text-body-sm transition-colors duration-300 ${
                pathname.startsWith(item.href)
                  ? "text-clay"
                  : linkColor
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-clay px-6 py-3 font-sans text-body-sm font-medium text-chalk transition-colors duration-300 hover:bg-clay-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-brass"
          >
            Demander un devis
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
          className={`p-2 lg:hidden ${onDarkHero ? "text-chalk" : "text-ink"}`}
        >
          <Menu size={26} strokeWidth={1.5} />
        </button>
      </div>

      {open && (
        <div
          ref={menuRef}
          className="fixed inset-0 z-[60] flex flex-col bg-ink px-gutter py-6 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-2xl text-chalk">
              {site.name}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
              className="p-2 text-chalk"
            >
              <X size={26} strokeWidth={1.5} />
            </button>
          </div>
          <nav
            aria-label="Navigation mobile"
            className="mt-16 flex flex-col gap-2"
          >
            {[{ label: "Accueil", href: "/" }, ...site.nav].map((item) => (
              <span key={item.href} className="block overflow-hidden">
                <Link
                  data-menu-link
                  href={item.href}
                  className="block py-2 font-display text-display-lg text-chalk"
                >
                  {item.label}
                </Link>
              </span>
            ))}
          </nav>
          <div className="mt-auto overflow-hidden">
            <p data-menu-link className="font-sans text-body-sm text-chalk/60">
              {site.phoneDisplay} · {site.email}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
