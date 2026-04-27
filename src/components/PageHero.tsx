import type { ReactNode } from "react";

interface PageHeroProps {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  align?: "center" | "left";
  height?: "sm" | "md" | "lg";
  tint?: string;
}

export function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  children,
  align = "center",
  height = "md",
  tint = "oklch(0.82 0.15 85 / 15%)",
}: PageHeroProps) {
  const heightCls =
    height === "lg" ? "min-h-[92vh]" : height === "sm" ? "min-h-[55vh]" : "min-h-[75vh]";
  const alignCls = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <section
      className={`relative ${heightCls} flex flex-col justify-center overflow-hidden pt-32 sm:pt-36 md:pt-40 pb-16`}
    >
      <div className="absolute inset-0">
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse_at_center,${tint},transparent_60%)`,
          }}
        />
      </div>

      <div className={`relative mx-auto max-w-5xl px-4 flex flex-col gap-6 ${alignCls}`}>
        {eyebrow && (
          <span className="inline-flex glass-gold px-4 py-1.5 rounded-full text-xs uppercase tracking-[0.3em] text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-foreground drop-shadow-2xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="flex flex-wrap gap-4 mt-2 justify-center">{children}</div>}
      </div>
    </section>
  );
}
