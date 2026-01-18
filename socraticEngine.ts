export type SocraticPrompt = {
  id: string;
  prompt: string;
  rationale: string;
};

export function analyzeClaim(claim: string): SocraticPrompt[] {
  const prompts: SocraticPrompt[] = [];

  if (!claim.includes("because")) {
    prompts.push({
      id: "missing-justification",
      prompt: "What is the justification for this claim?",
      rationale: "Claims without explicit justification are epistemically incomplete."
    });
  }

  if (claim.split(" ").length < 8) {
    prompts.push({
      id: "underdeveloped-claim",
      prompt: "This claim is very compressed. Can you expand it into explicit premises?",
      rationale: "Compression hides assumptions."
    });
  }

  if (!/[A-Z]/.test(claim)) {
    prompts.push({
      id: "undefined-terms",
      prompt: "Define your key terms precisely. What do they exclude?",
      rationale: "Undefined terms prevent evaluation."
    });
  }

  return prompts;
}
