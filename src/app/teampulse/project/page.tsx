import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { GridIcon, ListBulletIcon, PlusIcon } from "@radix-ui/react-icons";
import ProjectCard from "./_components/project-card";

export default function Projects() {
  return (
    <div className="">
      <div className="p-6">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        <p className="text-sm text-muted-foreground">
          List of all your projects
        </p>
      </div>
      <Separator />
      <div className="p-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12 px-2">
          <Input placeholder="Search Projects" className="h-10 w-full mr-4" />
          <div className="flex">
            <div className="mr-4">
              <ToggleGroup type="single" variant="outline">
                <ToggleGroupItem value="bold" aria-label="Toggle Grid">
                  <GridIcon className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle List">
                  <ListBulletIcon className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    Create New...
                    <PlusIcon className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Project</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Project</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                  <DropdownMenuItem>Resource</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          {/* <div className="w-1/4 px-2 pb-4">
            <Link href="/teampulse/project/PlannetDDS">
              <Card className="hover:shadow-md transition duration-150 h-40 flex items-center justify-center border-dashed bg-slate-50">
                <PlusIcon className="w-16 h-16 text-gray-400" />
              </Card>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}
