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
  <div className="min-h-screen bg-background flex flex-col">
   
 <header className="border-b border-border bg-card px-6 py-4">
      <h1 className="text-xl font-semibold text-foreground">
        Candidate Evaluation Comparison
      </h1>
      <p className="text-sm text-muted-foreground mt-1">
        Previous vs Trained AI model-based evaluations • Ranked independently per source
      </p>
    </header>


    {/* Kanban Board */}
    <div className="flex-1 overflow-y-auto p-6">
      <div className="flex flex-wrap gap-4">
        <KanbanColumn
          title="previous Evaluations"
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
