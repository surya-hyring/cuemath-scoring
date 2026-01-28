import { KanbanColumn } from "./KanbanColumn";
import {
  chatgptEvaluations,
  claudeEvaluations,
  geminiEvaluations,
  qwenEvaluations,
  clientEvaluations,
} from "@/data/evaluations";

// Transform data for each column
function prepareClientData() {
  // Sort by score descending, null scores at end
  return [...clientEvaluations]
    .sort((a, b) => {
      if (a.score === null) return 1;
      if (b.score === null) return -1;
      return b.score - a.score;
    })
    .map(e => ({
      name: e.name,
      overallScore: e.score,
      comment: e.detailed_comments,
    }));
}

function prepareModelData(evaluations: typeof chatgptEvaluations) {
  // Sort by overall_score descending
  return [...evaluations]
    .sort((a, b) => b.overall_score - a.overall_score)
    .map(e => ({
      name: e.name,
      overallScore: e.overall_score,
      comment: e.detailed_comments,
    }));
}

export function KanbanBoard() {
  const clientData = prepareClientData();
  const chatgptData = prepareModelData(chatgptEvaluations);
  const claudeData = prepareModelData(claudeEvaluations);
  const geminiData = prepareModelData(geminiEvaluations);
  const qwenData = prepareModelData(qwenEvaluations);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4">
        <h1 className="text-xl font-semibold text-foreground">
          Candidate Evaluation Comparison
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Multi-source evaluation data • Candidates ranked by overall score within each source
        </p>
      </header>

      {/* Legend */}
      <div className="px-6 py-3 border-b border-border bg-muted/30">
        <div className="flex flex-wrap items-center gap-4 text-xs">
          <span className="font-medium text-muted-foreground">Score Bands:</span>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-score-excellent border border-border"></span>
            <span className="text-muted-foreground">80+ Excellent</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-score-good border border-border"></span>
            <span className="text-muted-foreground">70-79 Good</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-score-fair border border-border"></span>
            <span className="text-muted-foreground">60-69 Fair</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-3 h-3 rounded bg-score-poor border border-border"></span>
            <span className="text-muted-foreground">&lt;60 Needs Improvement</span>
          </div>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="p-6 overflow-x-auto">
        <div className="flex gap-4 min-w-max">
          <KanbanColumn
            title="Client Evaluation"
            columnType="client"
            candidates={clientData}
            showRank={false}
          />
          <KanbanColumn
            title="Model A"
            columnType="model-a"
            candidates={chatgptData}
            showRank={true}
          />
          <KanbanColumn
            title="Model B"
            columnType="model-b"
            candidates={claudeData}
            showRank={true}
          />
          <KanbanColumn
            title="Model C"
            columnType="model-c"
            candidates={geminiData}
            showRank={true}
          />
          <KanbanColumn
            title="Model D"
            columnType="model-d"
            candidates={qwenData}
            showRank={true}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-3 text-xs text-muted-foreground">
        Data displayed exactly as provided • No score normalization or modification applied
      </footer>
    </div>
  );
}
