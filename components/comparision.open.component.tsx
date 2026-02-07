"use client";

import { useMemo, useState } from "react";
import { OPEN_AI_DATA } from "@/data/openai";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Badge } from "./ui/badge";

const ScoreRow = ({ label, value }: { label: string; value: number }) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <Progress value={value} />
    </div>
  );
};

export  const CompareOPENAIComponent = () => {
  const [search, setSearch] = useState("");

  const filteredAndSortedData = useMemo(() => {
    return OPEN_AI_DATA.filter((item) =>
      item.candidate_name.toLowerCase().includes(search.toLowerCase()),
    ).sort(
      (a, b) =>
        b.evaluation.data.overall_score - a.evaluation.data.overall_score,
    );
  }, [search]);

  return (
    <div className="space-y-4 p-3 max-w-xl">
      <Input
        placeholder="Search candidate..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid gap-4">
        {filteredAndSortedData.map((each, index) => {
          const data = each.evaluation.data;

          return (
            <Card key={each.candidate_id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge
                      variant={index === 0 ? "default" : "secondary"}
                      className="text-base px-3 py-1"
                    >
                      Rank {index + 1}
                    </Badge>

                    <span>{each.candidate_name}</span>
                  </div>

                  <span className="text-sm font-normal">
                    Overall: {data.overall_score}
                  </span>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <ScoreRow
                  label="Pronunciation"
                  value={data.pronunciation_score}
                />
                <ScoreRow label="Grammar" value={data.grammar_score} />
                <ScoreRow label="Vocabulary" value={data.vocabulary_score} />
                <ScoreRow label="Fluency" value={data.fluency_score} />
                <ScoreRow
                  label="Filler Words"
                  value={data.filler_words_score}
                />
                <ScoreRow
                  label="Mother Tongue Influence"
                  value={data.mother_tongue_influence_score}
                />

                {/* Summary */}
                <div className="pt-2 space-y-2">
                  <p className="font-medium">Summary</p>
                  <ul className="list-disc pl-4 space-y-1 text-sm">
                    {data.summary_points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

