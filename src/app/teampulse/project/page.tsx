import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Projects() {
  return (
    <div className="space-y-6 px-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        <p className="text-sm text-muted-foreground">
          List of all your projects
        </p>
      </div>
      <Separator />
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Denticon</CardTitle>
          <CardDescription>PlanetDDS</CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex justify-between">
          <p className="text-muted-foreground">
            No of resources: <span className="font-bold text-black">70</span>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
