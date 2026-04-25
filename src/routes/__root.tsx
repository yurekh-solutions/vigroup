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
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

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
