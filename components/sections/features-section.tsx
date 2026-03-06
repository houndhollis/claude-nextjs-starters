import {
  Zap,
  Grid,
  RotateCcw,
  TrendingUp,
  CheckCircle,
} from "lucide-react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { FEATURE_ITEMS } from "@/lib/constants"

// 아이콘 매핑
const iconMap: Record<string, typeof Zap> = {
  Zap,
  Grid,
  RotateCcw,
  TrendingUp,
  CheckCircle,
}

export function FeaturesSection() {
  return (
    <SectionWrapper id="features">
      <div className="text-center mb-12">
        <Badge className="mb-4" variant="secondary">
          특징
        </Badge>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          강력한 기능을 갖춘 스타터킷
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          프로덕션 환경에 즉시 배포 가능한 모든 기능을 포함하고 있습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURE_ITEMS.map((feature) => {
          const Icon = iconMap[feature.iconName] || Zap
          return (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
