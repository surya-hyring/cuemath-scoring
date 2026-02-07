"use client"

import { CompareClaudeComponent } from "./comparision.claude.component"
import { CompareGeminiData } from "./comparision.gemini.component"
import { CompareOPENAIComponent } from "./comparision.open.component"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"

const CompareComponent = () => {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 p-3 md:grid-cols-3">
      
      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>MODEL A</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-0">
          <CompareOPENAIComponent />
        </CardContent>
      </Card>

      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>MODEL B</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-0">
          <CompareClaudeComponent />
        </CardContent>
      </Card>

      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle>MODEL C</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-0">
          <CompareGeminiData />
        </CardContent>
      </Card>

    </div>
  )
}

export default CompareComponent
