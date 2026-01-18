export type EvaluationResult = {
  score: number;
  failures: string[];
};

export function evaluateResponse(response: string): EvaluationResult {
  const failures: string[] = [];
  let score = 0;

  if (response.length > 100) score += 1;
  else failures.push("Response is too short to demonstrate reasoning.");

  if (response.includes("therefore")) score += 1;
  else failures.push("No explicit inference marker (e.g., 'therefore').");

  if (response.includes("assume")) score += 1;
  else failures.push("Assumptions are not surfaced explicitly.");

  return { score, failures };
}
