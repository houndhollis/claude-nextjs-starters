import { SectionWrapper } from "@/components/layout/section-wrapper"
import { STATS } from "@/lib/constants"

export function StatsSection() {
  return (
    <SectionWrapper
      id="stats"
      className="py-16 bg-muted/30 rounded-lg"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <div className="text-4xl font-bold text-primary mb-2">
              {stat.value}
            </div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
