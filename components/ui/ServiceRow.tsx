import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/types";

/**
 * Rangée service pleine largeur — geste signature de /services.
 * L'image du service apparaît en fond au hover (fade + léger scale).
 */
export default function ServiceRow({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative block overflow-hidden border-b border-line focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-brass"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
      >
        <Image
          src={service.hero}
          alt=""
          fill
          sizes="100vw"
          className="scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-ink/55" />
      </div>
      <div className="relative mx-auto grid max-w-container grid-cols-12 items-baseline gap-x-6 px-gutter py-12 md:py-16">
        <span className="col-span-2 font-sans text-label font-medium uppercase text-brass md:col-span-1">
          {service.num}
        </span>
        <h2 className="col-span-10 font-display text-display-lg text-ink transition-colors duration-500 group-hover:text-chalk md:col-span-6">
          {service.title}
        </h2>
        <p className="col-span-10 col-start-3 mt-3 max-w-prose font-sans text-body text-ink-muted transition-colors duration-500 group-hover:text-chalk/80 md:col-span-4 md:col-start-9 md:mt-0">
          {service.short}
        </p>
      </div>
    </Link>
  );
}
