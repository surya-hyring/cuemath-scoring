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

/* -----------------------------
   CEFR Reference Meter
-------------------------------- */
const CEFRMeter = () => {
  const levels = [
    { label: "A1", range: "1–40", color: "bg-red-500" },
    { label: "A2", range: "41–55", color: "bg-orange-500" },
    { label: "B1", range: "56–65", color: "bg-yellow-500 text-black" },
    { label: "B2", range: "66–75", color: "bg-lime-500 text-black" },
    { label: "C1", range: "76–90", color: "bg-green-600" },
    { label: "C2", range: "91–100", color: "bg-emerald-700" },
  ]

  return (
    <div className="rounded-lg border bg-muted/30 p-4">
      <div className="mb-2 text-xs font-medium text-muted-foreground">
        CEFR Score Reference
      </div>

      <div className="flex w-full overflow-hidden rounded-md">
        {levels.map((level) => (
          <div
            key={level.label}
            className={`flex flex-1 flex-col items-center justify-center py-2 text-xs font-semibold text-white ${level.color}`}
          >
            <span>{level.label}</span>
            <span className="text-[10px] opacity-90">
              {level.range}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* -----------------------------
   Main Compare Page
-------------------------------- */
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

      {/* CEFR Reference Meter */}
      <CEFRMeter />

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        
        {/* OpenAI */}
        <Card className="flex h-[85vh] flex-col">
          <CardHeader className="border-b">
            <CardTitle>
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
            <CardTitle>
              <p className="text-base font-semibold">Model B</p>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto p-0">
            <ComapreClaudeComponent />
          </CardContent>
        </Card>

        {/* Gemini */}
        <Card className="flex h-[85vh] flex-col">
          <CardHeader className="border-b">
            <CardTitle>
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
