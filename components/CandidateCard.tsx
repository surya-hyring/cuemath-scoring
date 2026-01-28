import { cn } from "@/lib/utils";

interface CandidateCardProps {
  name: string;
  rank?: number;
  overallScore: number | null;
  comment: string;
  columnType: "client" | "model-a" | "model-b" | "model-c" | "model-d";
}

/* Score background tint (very subtle) */
function getScoreBackground(score: number | null): string {
  if (score === null) return "bg-muted/40";
  if (score >= 80) return "bg-emerald-500/10";
  if (score >= 70) return "bg-blue-500/10";
  if (score >= 60) return "bg-amber-500/10";
  return "bg-rose-500/10";
}

/* Score text color */
function getScoreTextColor(score: number | null): string {
  if (score === null) return "text-muted-foreground";
  if (score >= 80) return "text-emerald-600";
  if (score >= 70) return "text-blue-600";
  if (score >= 60) return "text-amber-600";
  return "text-rose-600";
}


/* Rank badge color per column */
function getRankBadgeColor(columnType: CandidateCardProps["columnType"]): string {
  const rankColors = {
    client: "bg-blue-600/10 text-blue-600",
    "model-a": "bg-emerald-600/10 text-emerald-600",
    "model-b": "bg-violet-600/10 text-violet-600",
    "model-c": "bg-amber-600/10 text-amber-600",
    "model-d": "bg-rose-600/10 text-rose-600",
  };

  return rankColors[columnType];
}

export function CandidateCard({
  name,
  rank,
  overallScore,
  comment,
  columnType,
}: CandidateCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded p-3 border-l-4",
        getScoreBackground(overallScore)
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-semibold text-sm text-foreground leading-tight">
          {name}
        </h3>

        {rank !== undefined && (
          <span
            className={cn(
              "text-xs font-semibold px-1.5 py-0.5 rounded shrink-0",
              getRankBadgeColor(columnType)
            )}
          >
            #{rank}
          </span>
        )}
      </div>

      {/* Score */}
      <div className="mb-2">
        <span className="text-xs text-muted-foreground">
          Overall Score:&nbsp;
        </span>
        <span
          className={cn(
            "text-lg font-bold",
            getScoreTextColor(overallScore)
          )}
        >
          {overallScore !== null ? overallScore.toFixed(0) : "N/A"}
        </span>
      </div>

      {/* Comment */}
      <p className="text-xs text-foreground/90 leading-relaxed">
        {comment}
      </p>
    </div>
  );
}
