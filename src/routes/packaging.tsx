import { createFileRoute, Outlet } from "@tanstack/react-router";
import { PackagingHeader } from "@/components/PackagingHeader";
import { PackagingFooter } from "@/components/PackagingFooter";
import { FloatingContact } from "@/components/FloatingContact";

export const Route = createFileRoute("/packaging")({
  component: PackagingLayout,
});

function PackagingLayout() {
  return (
    <>
      <PackagingHeader />
      <main>
        <Outlet />
      </main>
      <PackagingFooter />
      <FloatingContact />
    </>
  );
}
