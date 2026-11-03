"use client";

import Link from "next/link";
import {
  useCallback,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";

import { useFinePointer } from "@/hooks/useFinePointer";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

type ButtonTone = "gold" | "navy" | "outline-dark" | "outline-light";

const toneClasses: Record<ButtonTone, string> = {
  gold: "bg-gold text-navy hover:bg-gold-hover",
  navy: "bg-navy text-cream hover:bg-navy-deep",
  "outline-dark":
    "border border-white/30 text-cream hover:border-gold hover:text-gold",
  "outline-light":
    "border border-navy text-navy hover:bg-navy hover:text-cream",
};

type Ripple = { id: number; x: number; y: number };

/** Sharp-cornered CTA link with magnetic hover + ripple. */
export function CtaLink({
  href,
  tone = "gold",
  className,
  children,
}: {
  href: string;
  tone?: ButtonTone;
  className?: string;
  children: ReactNode;
}) {
  const reduced = usePrefersReducedMotion();
  const finePointer = useFinePointer();
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idRef = useRef(0);

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (reduced || !finePointer) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) * 0.28;
      const y = (e.clientY - (rect.top + rect.height / 2)) * 0.28;
      setOffset({ x, y });
    },
    [finePointer, reduced],
  );

  const onMouseLeave = useCallback(() => setOffset({ x: 0, y: 0 }), []);

  const onClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (reduced) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const id = ++idRef.current;
      setRipples((prev) => [
        ...prev,
        { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
      ]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    },
    [reduced],
  );

  return (
    <Link
      href={href}
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      style={
        reduced
          ? undefined
          : {
              transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
              transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
            }
      }
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-[2px] font-sans font-semibold transition-[colors,transform,box-shadow] duration-300 will-change-transform hover:scale-[1.02] hover:shadow-[0_12px_28px_-12px_rgba(14,31,56,0.35)] active:scale-[0.98]",
        toneClasses[tone],
        className,
      )}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden
          className="pointer-events-none absolute size-3 -translate-x-1/2 -translate-y-1/2 animate-[elrRipple_0.6s_ease-out_forwards] rounded-full bg-white/40"
          style={{ left: r.x, top: r.y }}
        />
      ))}
    </Link>
  );
}
