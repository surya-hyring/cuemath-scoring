"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ComapreClaudeComponent } from "./comparision.claude.component"
import { CompareGeminiData } from "./comparision.gemini.component"
import { CompareOPENAIComponent } from "./comparision.open.component"

const CompareComponent = () => {
  return (
    <div className="mx-auto max-w-7xl space-y-4 p-4">
      
      {/* Page Header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight">
          AI English Evaluation Comparison
        </h1>
        <p className="text-sm text-muted-foreground">
          Side-by-side comparison of candidate evaluations across AI models
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        
        {/* OpenAI */}
        <Card className="flex h-[85vh] flex-col">
          <CardHeader className="border-b">
            <CardTitle className="space-y-1">
              <p className="text-base font-semibold">Model A</p>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-0">
            <CompareOPENAIComponent />
          </CardContent>
        </Card>

        {/* Claude */}
        <Card className="flex h-[85vh] flex-col">
          <CardHeader className="border-b">
            <CardTitle className="space-y-1">
            <p className="text-base font-semibold">Model B</p>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-0">
            <ComapreClaudeComponent />
          </CardContent>
        </Card>
        

        <Card className="flex h-[85vh] flex-col">
          <CardHeader className="border-b">
            <CardTitle className="space-y-1">
            <p className="text-base font-semibold">Model C</p>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-0">
            <CompareGeminiData />
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

export default CompareComponent
