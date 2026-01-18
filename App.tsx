import { useState } from "react";
import { analyze, evaluate } from "./api";

export default function App() {
  const [claim, setClaim] = useState("");
  const [prompts, setPrompts] = useState<any[]>([]);
  const [response, setResponse] = useState("");
  const [result, setResult] = useState<any>(null);

  return (
    <div className="container">
      <h1>Rigor Baseline</h1>

      <textarea
        placeholder="Enter a claim"
        value={claim}
        onChange={e => setClaim(e.target.value)}
      />

      <button onClick={async () => setPrompts(await analyze(claim))}>
        Analyze Claim
      </button>

      {prompts.map(p => (
        <p key={p.id}><strong>{p.prompt}</strong></p>
      ))}

      <textarea
        placeholder="Respond with reasoning"
        value={response}
        onChange={e => setResponse(e.target.value)}
      />

      <button onClick={async () => setResult(await evaluate(response))}>
        Submit Response
      </button>

      {result && (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      )}
    </div>
  );
}
