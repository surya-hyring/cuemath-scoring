import { cn } from "@/lib/utils";
import { CandidateCard } from "./CandidateCard";

interface ColumnData {
  name: string;
  overallScore: number | null;
  comment: string;
}

interface KanbanColumnProps {
  title: string;
  columnType: "client" | "model-a" | "model-b" | "model-c" | "model-d";
  candidates: ColumnData[];
  showRank: boolean;
}

/* Header gradient colors */
function getHeaderBackground(columnType: KanbanColumnProps["columnType"]): string {
  const headerColors = {
    client: "bg-gradient-to-r from-blue-600 to-blue-500",
    "model-a": "bg-gradient-to-r from-emerald-600 to-emerald-500",
    "model-b": "bg-gradient-to-r from-violet-600 to-violet-500",
    "model-c": "bg-gradient-to-r from-amber-600 to-amber-500",
    "model-d": "bg-gradient-to-r from-rose-600 to-rose-500",
  };

  return headerColors[columnType];
}

/* Subtle column background tint */
function getColumnTint(columnType: KanbanColumnProps["columnType"]): string {
  const columnTints = {
    client: "bg-blue-500/5",
    "model-a": "bg-emerald-500/5",
    "model-b": "bg-violet-500/5",
    "model-c": "bg-amber-500/5",
    "model-d": "bg-rose-500/5",
  };

  return columnTints[columnType];
}

export function KanbanColumn({
  title,
  columnType,
  candidates,
  showRank,
}: KanbanColumnProps) {
  return (
    <div
      className={cn(
        "flex flex-col min-w-[280px] max-w-[320px] rounded border border-border",
        "bg-secondary/40",
        getColumnTint(columnType)
      )}
    >
      {/* Column Header */}
      <div
        className={cn(
          "px-3 py-2 rounded-t font-medium text-sm",
          "text-white/95",
          getHeaderBackground(columnType)
        )}
      >
        <div className="flex items-center justify-between">
          <span>{title}</span>
          <span className="text-xs text-white/70">
            {candidates.length} candidates
          </span>
        </div>
      </div>

      {/* Cards Container */}
      <div className="flex-1 overflow-y-auto p-2 space-y-2 max-h-[calc(100vh-180px)] bg-black/5 rounded-b">
        {candidates.map((candidate, index) => (
          <CandidateCard
            key={candidate.name}
            name={candidate.name}
            rank={showRank ? index + 1 : undefined}
            overallScore={candidate.overallScore}
            comment={candidate.comment}
            columnType={columnType}
          />
        ))}
      </div>
    </div>
  );
}
