import { createFileRoute, Outlet } from "@tanstack/react-router";
import { FleetHeader } from "@/components/FleetHeader";
import { FleetFooter } from "@/components/FleetFooter";
import { FloatingContact } from "@/components/FloatingContact";

export const Route = createFileRoute("/fleet")({
  component: FleetLayout,
});

function FleetLayout() {
  return (
    <>
      <FleetHeader />
      <main className="pt-20">
        <Outlet />
      </main>
      <FleetFooter />
      <FloatingContact />
    </>
  );
}
