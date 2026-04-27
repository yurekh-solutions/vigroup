import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LogisticsHeader } from "@/components/LogisticsHeader";
import { LogisticsFooter } from "@/components/LogisticsFooter";
import { FloatingContact } from "@/components/FloatingContact";

export const Route = createFileRoute("/logistics")({
  component: LogisticsLayout,
});

function LogisticsLayout() {
  return (
    <>
      <LogisticsHeader />
      <main>
        <Outlet />
      </main>
      <LogisticsFooter />
      <FloatingContact />
    </>
  );
}
