import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="flex flex-col space-y-4 mt-4">
        {/* Title skeleton */}
        <Skeleton className="h-[40px] w-[300px]" />
        {/* Description skeleton */}
        <Skeleton className="h-[20px] w-[500px]" />
      </div>
    </div>
  );
}
