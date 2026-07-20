import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex min-h-[44px] items-center justify-center gap-3 font-sans text-body font-medium transition-colors duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-brass disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-clay px-8 py-4 text-chalk hover:bg-clay-dark",
  secondary:
    "border border-current px-8 py-4 text-current hover:bg-ink hover:border-ink hover:text-chalk",
  ghost:
    "group/ghost relative min-h-0 p-0 text-current after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-brass after:transition-transform after:duration-400 after:ease-out hover:after:origin-left hover:after:scale-x-100",
};

type ButtonProps = {
  variant?: Variant;
  href?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "className"> &
  Pick<ComponentPropsWithoutRef<"a">, "target" | "rel">;

export default function Button({
  variant = "primary",
  href,
  children,
  ...rest
}: ButtonProps) {
  const cls = `${base} ${variants[variant]}`;
  if (href) {
    const { target, rel, ...linkRest } = rest;
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        className={cls}
        {...(linkRest as Omit<ComponentPropsWithoutRef<"a">, "href">)}
      >
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
