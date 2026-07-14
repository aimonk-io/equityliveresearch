"use client";

import { m } from "motion/react";
import {
  useCallback,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent,
  type CSSProperties,
} from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

type Ripple = { id: number; x: number; y: number };

type Props = {
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  magnetic?: boolean;
  ripple?: boolean;
  style?: CSSProperties;
};

/** Magnetic + ripple interaction for buttons. */
export function MagneticButton({
  children,
  className,
  type = "button",
  onClick,
  disabled,
  magnetic = true,
  ripple = true,
  style,
}: Props) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLButtonElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idRef = useRef(0);
  const strength = 0.32;

  const onMouseMove = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (reduced || !magnetic) return;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      setOffset({ x: x * strength, y: y * strength });
    },
    [magnetic, reduced],
  );

  const onMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  const spawnRipple = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (reduced || !ripple) return;
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
    [reduced, ripple],
  );

  return (
    <m.button
      ref={ref}
      type={type}
      disabled={disabled}
      whileTap={reduced ? undefined : { scale: 0.98 }}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden transition-transform duration-300 will-change-transform hover:scale-[1.02] active:scale-[0.98]",
        className,
      )}
      style={{
        ...style,
        transform:
          magnetic && !reduced
            ? `translate3d(${offset.x}px, ${offset.y}px, 0)`
            : undefined,
        transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={(e) => {
        spawnRipple(e);
        onClick?.(e);
      }}
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden
          className="pointer-events-none absolute size-3 -translate-x-1/2 -translate-y-1/2 animate-[elrRipple_0.6s_ease-out_forwards] rounded-full bg-white/35"
          style={{ left: r.x, top: r.y }}
        />
      ))}
    </m.button>
  );
}
