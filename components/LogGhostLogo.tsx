import Image from "next/image";

const dimensions = {
  nav: 40,
  hero: 120,
  footer: 32,
  sm: 28,
} as const;

type Size = keyof typeof dimensions;

const shadow: Record<Size, string> = {
  nav: "drop-shadow-[0_2px_16px_rgba(127,119,221,0.35)]",
  hero: "drop-shadow-[0_12px_48px_rgba(127,119,221,0.45)]",
  footer: "drop-shadow-[0_2px_12px_rgba(127,119,221,0.25)]",
  sm: "drop-shadow-[0_2px_10px_rgba(127,119,221,0.3)]",
};

export function LogGhostLogo({
  size = "nav",
  className = "",
  priority = false,
}: {
  size?: Size;
  className?: string;
  /** Set true for LCP image (e.g. hero) */
  priority?: boolean;
}) {
  const px = dimensions[size];
  return (
    <Image
      src="/log-ghost-purple.svg"
      width={px}
      height={px}
      alt="Log Ghost"
      className={`select-none ${shadow[size]} ${className}`}
      priority={priority}
      sizes={`${px}px`}
    />
  );
}
