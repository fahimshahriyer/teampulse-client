import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      <div className=" p-6">
        <div className="flex flex-col space-y-4 mt-4">
          {/* Title skeleton */}
          <Skeleton className="h-[40px] w-[300px]" />
          {/* Description skeleton */}
          <Skeleton className="h-[20px] w-[500px]" />
        </div>
      </div>
      <Separator />
      <div className="p-6 max-w-7xl mx-auto">
        <Skeleton className="h-[40px] w-full" />
      </div>
    </div>
  );
}
