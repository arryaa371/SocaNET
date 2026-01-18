import { Router } from "express";
import { analyzeClaim } from "../../core/socraticEngine";
import { evaluateResponse } from "../../core/rigorEvaluator";
import { canAdvance } from "../../core/progressionLogic";

export const router = Router();

router.post("/analyze", (req, res) => {
  const { claim } = req.body;
  res.json(analyzeClaim(claim));
});

router.post("/evaluate", (req, res) => {
  const { response } = req.body;
  const result = evaluateResponse(response);
  res.json({
    ...result,
    canAdvance: canAdvance(result.score)
  });
});
