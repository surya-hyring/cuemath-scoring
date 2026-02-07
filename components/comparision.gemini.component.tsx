"use client"

import { useMemo, useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { GEMINI_DATA } from "@/data/gemini.data"

const ScoreRow = ({
  label,
  value,
}: {
  label: string
  value: number
}) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <Progress value={value} />
    </div>
  )
}

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
    <div className="space-y-4 p-3">
      <Input
        placeholder="Search candidate..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid gap-4">
        {filteredAndSortedData.map((each, index) => (
          <Card key={each.name}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge
                    variant={index === 0 ? "default" : "secondary"}
                    className="px-3 py-1 text-base"
                  >
                    Rank {index + 1}
                  </Badge>

                  <span>{each.name}</span>
                </div>

                <span className="text-sm font-normal">
                  Overall: {each.overall_score}
                </span>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <ScoreRow
                label="Pronunciation"
                value={each.pronunciation_score}
              />
              <ScoreRow label="Grammar" value={each.grammar_score} />
              <ScoreRow
                label="Vocabulary"
                value={each.vocabulary_score}
              />
              <ScoreRow label="Fluency" value={each.fluency_score} />
              <ScoreRow
                label="Filler Words"
                value={each.filler_words_score}
              />
              <ScoreRow
                label="Mother Tongue Influence"
                value={each.mother_tongue_influence_score}
              />

              {/* Detailed comments */}
              <div className="pt-2 space-y-2">
                <p className="font-medium">Detailed Feedback</p>
                <p className="text-sm text-muted-foreground">
                  {each.detailed_comments}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
