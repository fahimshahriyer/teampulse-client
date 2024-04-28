import { Separator } from "@/components/ui/separator";

export default function Dashboard() {
  return (
    <>
      <div className="p-6 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-sm text-muted-foreground">
            Manage your account settings and preferences.
          </p>
        </div>
      </div>
      <Separator />
    </>
  );
}
