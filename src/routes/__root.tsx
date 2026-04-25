import {
  Outlet,
  createRootRoute,
  Link,
  useLocation,
} from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LogisticsHeader } from "@/components/LogisticsHeader";
import { LogisticsFooter } from "@/components/LogisticsFooter";
import viLogo from "@/assets/vi-group-logo.png";

import "../styles.css";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 pt-28">
      <div className="glass-strong rounded-3xl p-12 max-w-md text-center">
        <h1 className="font-display text-7xl text-gradient-gold font-bold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-gold px-6 py-2.5 text-sm font-semibold text-primary-foreground glow-gold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vi Group — Logistics, Packaging & Fleet Solutions" },
      {
        name: "description",
        content:
          "Vi Group: premium logistics, customized corrugated packaging, and temperature-controlled fleet solutions across India and worldwide.",
      },
      { name: "author", content: "Vi Group" },
      { name: "robots", content: "index, follow" },
      { name: "keywords", content: "Vi Group, logistics India, packaging solutions, corrugated boxes, fleet management, cold chain logistics, temperature controlled transport, freight forwarding, warehouse solutions, supply chain management" },
      { property: "og:title", content: "Vi Group — Premium Logistics, Packaging & Fleet Solutions" },
      { property: "og:description", content: "We move your world with precision and speed. End-to-end logistics, packaging, and fleet solutions across India." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://vigroup.in" },
      { property: "og:site_name", content: "Vi Group" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vi Group — Logistics, Packaging & Fleet Solutions" },
      { name: "twitter:description", content: "Premium logistics, packaging, and fleet solutions across India and worldwide." },
      { name: "theme-color", content: "#1a1a2e" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: viLogo },
      { rel: "apple-touch-icon", href: viLogo },
      { rel: "canonical", href: "https://vigroup.in" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&family=Montserrat:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

function RootComponent() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isLogistics = pathname.startsWith("/logistics");
  const isPackaging = pathname.startsWith("/packaging");
  const isFleet = pathname.startsWith("/fleet");
  const isSubsidiary = isLogistics || isPackaging || isFleet;

  return (
    <>
      {!isHome && !isSubsidiary && <SiteHeader />}
      <main>
        <Outlet />
      </main>
      {!isHome && !isSubsidiary && <SiteFooter />}
    </>
  );
}
