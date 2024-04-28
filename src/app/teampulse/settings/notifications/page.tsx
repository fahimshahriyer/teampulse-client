import { Separator } from "@/components/ui/separator";

export default function NotificationSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Notifications</h3>
        <p className="text-sm text-muted-foreground">
          Set your notifications preferences.
        </p>
      </div>
      <Separator />
    </div>
  );
}
