"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Staggered entrance delay in ms (after intersecting) */
  delayMs?: number;
  /** Slightly more dramatic motion */
  variant?: "default" | "subtle" | "scale";
};

export function RevealOnView({ children, className = "", delayMs = 0, variant = "default" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-in");
      return;
    }
    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-in");
      return;
    }
    const ob = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            ob.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.06 }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  const variantClass =
    variant === "subtle" ? "reveal reveal--subtle" : variant === "scale" ? "reveal reveal--scale" : "reveal";

  return (
    <div
      ref={ref}
      className={`${variantClass} ${className}`}
      style={delayMs > 0 ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </div>
  );
}
