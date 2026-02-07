"use client"

import { useMemo, useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { GEMINI_DATA } from "@/data/gemini.data"

/* -------------------- helpers -------------------- */

const getEnglishGrade = (score: number) => {
  if (score <= 40) return "A1"
  if (score <= 55) return "A2"
  if (score <= 65) return "B1"
  if (score <= 75) return "B2"
  if (score <= 90) return "C1"
  return "C2"
}

const gradeColorMap: Record<string, string> = {
  A1: "bg-red-100 text-red-700",
  A2: "bg-orange-100 text-orange-700",
  B1: "bg-yellow-100 text-yellow-800",
  B2: "bg-lime-100 text-lime-800",
  C1: "bg-green-100 text-green-700",
  C2: "bg-emerald-100 text-emerald-800",
}

const ScoreRow = ({
  label,
  value,
}: {
  label: string
  value: number
}) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{label}</span>
        <span className="text-sm font-medium text-foreground">
          {value}
        </span>
      </div>
      <Progress value={value} className="h-2" />
    </div>
  )
}

/* -------------------- component -------------------- */

export const CompareGeminiData = () => {
  const [search, setSearch] = useState("")

  const filteredAndSortedData = useMemo(() => {
    return GEMINI_DATA
      .filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => b.overall_score - a.overall_score)
  }, [search])

  return (
    <div className="space-y-4 p-4 max-w-xl">
      <Input
        placeholder="Search candidate..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid gap-4">
        {filteredAndSortedData.map((each, index) => {
          const grade = getEnglishGrade(each.overall_score)

          return (
            <Card key={each.name}>
              {/* ---------- HEADER ---------- */}
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      {/* CEFR Grade */}
                      <span
                        className={`rounded-md px-2 py-1 text-sm font-bold ${gradeColorMap[grade]}`}
                      >
                        {grade}
                      </span>

                      {/* Rank */}
                      <span className="text-xs text-muted-foreground">
                        Rank #{index + 1}
                      </span>
                    </div>

                    {/* Candidate Name */}
                    <p className="text-lg font-semibold leading-none">
                      {each.name}
                    </p>
                  </div>

                  {/* Overall Score */}
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">
                      Overall Score
                    </p>
                    <p className="text-2xl font-bold">
                      {each.overall_score}
                    </p>
                  </div>
                </div>
              </CardHeader>

              {/* ---------- CONTENT ---------- */}
              <CardContent className="space-y-5">
                {/* Scores */}
                <div className="grid gap-3">
                  <ScoreRow label="Fluency" value={each.fluency_score} />
                  <ScoreRow label="Pronunciation" value={each.pronunciation_score} />
                  <ScoreRow label="Vocabulary" value={each.vocabulary_score} />
                  <ScoreRow label="Grammar" value={each.grammar_score} />
                  <ScoreRow label="Filler Words" value={each.filler_words_score} />
                  <ScoreRow
                    label="Mother Tongue Influence"
                    value={each.mother_tongue_influence_score}
                  />
                </div>

                {/* Feedback */}
                <div className="pt-2 space-y-1">
                  <p className="text-sm font-medium">
                    Detailed Feedback
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {each.detailed_comments}
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
