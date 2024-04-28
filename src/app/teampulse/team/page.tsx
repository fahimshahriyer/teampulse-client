import { Separator } from "@/components/ui/separator";

export default function Teams() {
  return (
    <>
      <div className="p-6 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Teams</h2>
          <p className="text-sm text-muted-foreground">Your team workspace</p>
        </div>
      </div>
      <Separator />
    </>
  );
}
