"use client";

import { useMemo, useState } from "react";
import { OPEN_AI_DATA } from "@/data/openai";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";

/* -------------------- helpers -------------------- */

const getEnglishGrade = (score: number) => {
  if (score <= 40) return "A1";
  if (score <= 55) return "A2";
  if (score <= 65) return "B1";
  if (score <= 75) return "B2";
  if (score <= 90) return "C1";
  return "C2";
};

const ScoreRow = ({
  label,
  value,
}: {
  label: string;
  value: number;
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
  );
};

/* -------------------- component -------------------- */

export const CompareOPENAIComponent = () => {
  const [search, setSearch] = useState("");

  const filteredAndSortedData = useMemo(() => {
    return OPEN_AI_DATA.filter((item) =>
      item.candidate_name.toLowerCase().includes(search.toLowerCase()),
    ).sort(
      (a, b) =>
        b.evaluation.data.overall_score -
        a.evaluation.data.overall_score,
    );
  }, [search]);

  return (
    <div className="space-y-4 p-4 max-w-xl">
      <Input
        placeholder="Search candidate..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid gap-4">
        {filteredAndSortedData.map((each, index) => {
          const data = each.evaluation.data;
          const grade = getEnglishGrade(data.overall_score);

          return (
            <Card key={each.candidate_id}>
              {/* ---------- HEADER ---------- */}
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      {/* English Level */}
                      <span className="text-3xl font-bold tracking-tight">
                        {grade}
                      </span>

                      {/* Rank */}
                      <span className="text-sm text-muted-foreground">
                        Rank #{index + 1}
                      </span>
                    </div>

                    {/* Candidate Name */}
                    <p className="text-lg font-semibold leading-none">
                      {each.candidate_name}
                    </p>
                  </div>

                  {/* Overall Score */}
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">
                      Overall Score
                    </p>
                    <p className="text-2xl font-bold">
                      {data.overall_score}
                    </p>
                  </div>
                </div>
              </CardHeader>

              {/* ---------- CONTENT ---------- */}
              <CardContent className="space-y-5">
                {/* Scores */}
                <div className="grid gap-3">
                  <ScoreRow
                    label="Fluency"
                    value={data.fluency_score}
                  />
                  <ScoreRow
                    label="Pronunciation"
                    value={data.pronunciation_score}
                  />
                  <ScoreRow
                    label="Vocabulary"
                    value={data.vocabulary_score}
                  />
                  <ScoreRow
                    label="Grammar"
                    value={data.grammar_score}
                  />
                  <ScoreRow
                    label="Filler Words"
                    value={data.filler_words_score}
                  />
                  <ScoreRow
                    label="Mother Tongue Influence"
                    value={data.mother_tongue_influence_score}
                  />
                </div>

                {/* Feedback */}
                <div className="pt-2 space-y-1">
                  <p className="text-sm font-medium">
                    Detailed Feedback
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {data.detailed_comments}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
