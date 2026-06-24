import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import type { Repository } from "@/types"
import { calculateMostUsedLanguages } from "@/utils"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

const UsedLanguages = ({ repositories }: { repositories: Repository[] }) => {
  const mostUsedLanguages = calculateMostUsedLanguages(repositories)
  // console.log(mostUsedLanguages)

  // Configuration for the chart's styling and labels
  // color sets the color of the bars
  // required in typescript
  const chartConfig = {
    language: {
      label: "Language",
      color: "#2563eb",
    },
  } satisfies ChartConfig

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">
        Used Languages
      </h2>
      {/* ChartContainer handles responsive sizing and theme variables */}
      <ChartContainer config={chartConfig} className="h-100 w-full">
        {/* BarChart is the main container for the bar chart visualization */}
        {/* accessibilityLayer adds ARIA labels for better screen reader support */}
        <BarChart accessibilityLayer data={mostUsedLanguages}>
          {/* CartesianGrid adds grid lines */}
          <CartesianGrid vertical={false} />
          {/* XAxis configures the horizontal axis showing `language` names */}
          <XAxis dataKey="language" tickLine={false} tickMargin={10} />
          {/* YAxis configures the vertical axis showing `count` values */}
          <YAxis dataKey="count" />
          {/* ChartTooltip shows details when hovering over bars */}
          <ChartTooltip content={<ChartTooltipContent />} />
          {/* Bar component defines how each data point is rendered */}
          {/* Uses CSS variable for color and adds rounded corners */}
          <Bar dataKey="count" fill="var(--color-language)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

export default UsedLanguages
