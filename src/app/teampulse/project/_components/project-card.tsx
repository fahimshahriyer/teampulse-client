import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function ProjectCard() {
  return (
    <div className="w-1/4 px-2 pb-4">
      <Link href="/teampulse/project/PlannetDDS">
        <Card className="hover:shadow-md transition duration-150 relative">
          <CardHeader>
            <CardTitle>XYZ Project</CardTitle>
            <CardDescription>XYZ Company LLC Inc</CardDescription>
          </CardHeader>
          <CardContent>
            <Badge>FTE</Badge>
          </CardContent>
          <CardFooter className="flex justify-between">
            <p className="text-muted-foreground">
              No of resources: <span className="font-bold text-black">70</span>
            </p>
          </CardFooter>
          <div className="absolute top-2 right-2">
            <Button variant="ghost" className="p-3">
              <DotsHorizontalIcon />
            </Button>
          </div>
        </Card>
      </Link>
    </div>
  );
}
