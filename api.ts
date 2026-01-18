export async function analyze(claim: string) {
  const res = await fetch("http://localhost:3001/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ claim })
  });
  return res.json();
}

export async function evaluate(response: string) {
  const res = await fetch("http://localhost:3001/evaluate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ response })
  });
  return res.json();
}
