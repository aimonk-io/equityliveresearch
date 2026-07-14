"use client";

import { GradientBlob } from "@/components/animations/GradientBlob";
import { Particles } from "@/components/animations/Particles";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

type Props = {
  className?: string;
  variant?: "navy" | "cream";
  particles?: boolean;
};

/**
 * Aurora mesh + floating blobs + optional noise overlay.
 * Place inside a `relative overflow-hidden` section.
 */
export function FloatingBackground({
  className,
  variant = "navy",
  particles = true,
}: Props) {
  const reduced = usePrefersReducedMotion();
  const isNavy = variant === "navy";

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      {/* Aurora / mesh */}
      <div
        className={cn(
          "absolute inset-0 opacity-60",
          isNavy
            ? "bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,rgba(198,160,82,0.12),transparent_55%),radial-gradient(ellipse_70%_50%_at_80%_10%,rgba(120,160,220,0.08),transparent_50%),radial-gradient(ellipse_60%_40%_at_60%_90%,rgba(198,160,82,0.06),transparent_50%)]"
            : "bg-[radial-gradient(ellipse_80%_50%_at_10%_0%,rgba(198,160,82,0.08),transparent_50%),radial-gradient(ellipse_60%_40%_at_90%_20%,rgba(14,31,56,0.04),transparent_50%)]",
        )}
      />

      {!reduced ? (
        <>
          <GradientBlob
            color={isNavy ? "gold" : "gold"}
            size={480}
            className="-left-24 -top-32 opacity-70"
            duration={22}
          />
          <GradientBlob
            color={isNavy ? "cream" : "navy"}
            size={360}
            className="-right-16 top-1/3 opacity-40"
            delay={2}
            duration={26}
          />
          <GradientBlob
            color="gold"
            size={280}
            className="bottom-0 left-1/3 opacity-30"
            delay={4}
            duration={20}
          />
          {particles ? (
            <Particles
              count={14}
              color={
                isNavy ? "rgba(198,160,82,0.4)" : "rgba(14,31,56,0.2)"
              }
            />
          ) : null}
        </>
      ) : null}

      {/* Film grain / noise */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
