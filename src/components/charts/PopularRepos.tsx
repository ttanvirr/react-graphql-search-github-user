import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import type { Repository } from "@/types"
import { calculateMostStarredRepos } from "@/utils"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

const PopularRepos = ({ repositories }: { repositories: Repository[] }) => {
  const popularRepos = calculateMostStarredRepos(repositories)
  // console.log(popularRepos)

  // Configuration for the chart's styling and labels
  // Required in typescript
  const chartConfig = {
    repo: {
      label: "Repository",
      color: "#e11c47",
    },
  } satisfies ChartConfig

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center mb-4">Popular Repos</h1>
      {/* ChartContainer handles responsive sizing and theme variables */}
      <ChartContainer config={chartConfig} className="h-100 w-full">
        {/* BarChart is the main container for the bar chart visualization */}
        {/* accessibilityLayer adds ARIA labels for better screen reader support */}
        <BarChart accessibilityLayer data={popularRepos}>
          {/* CartesianGrid adds grid lines */}
          <CartesianGrid vertical={false} />
          {/* XAxis: Horizontal axis showing repository names */}
          {/* tickFormatter truncates long repository names to 10 characters */}
          <XAxis
            dataKey="repo"
            tickLine={false}
            tickMargin={10}
            tickFormatter={(value) => value.slice(0, 10)}
          />
          {/* YAxis: Vertical axis showing star counts */}
          <YAxis dataKey="stars" />
          {/* ChartTooltip shows details when hovering over bars */}
          <ChartTooltip content={<ChartTooltipContent />} />
          {/* Bar component defines how each data point is rendered */}
          {/* Uses CSS variable for color and adds rounded corners */}
          <Bar dataKey="stars" fill="var(--color-repo)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export default PopularRepos
