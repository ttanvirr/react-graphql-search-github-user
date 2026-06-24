import { Skeleton } from "@/components/ui/skeleton"
/**
 * Loading component that displays placeholder content while data is being fetched
 * Uses shadcn/ui's Skeleton component to create loading animations
 */

const Loading = () => {
  return (
    <div>
      <Skeleton className="h-48 w-full lg:w-1/2 rounded mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mb-8">
        <Skeleton className="h-18" />
        <Skeleton className="h-18" />
        <Skeleton className="h-18" />
        <Skeleton className="h-18" />
      </div>
    </div>
  )
}

export default Loading
