# SocaNET 

SocaNET is a high-friction knowledge and productivity system built on a simple conviction: meaningful progress requires epistemic discipline. Speed, volume, and convenience are not substitutes for clarity, coherence, or justified belief. This system treats rigor not as an advanced feature, but as the minimum condition for advancement.

Most modern productivity and learning tools optimize for throughput. They reward rapid capture, passive consumption, and frictionless output. SocaNET takes the opposite approach. It is designed to slow users down deliberately, forcing them to articulate assumptions, define terms precisely, and justify conclusions before they are allowed to move forward. Advancement is gated by reasoning quality, not engagement metrics.

The system functions as a structured thinking environment rather than a content feed. Users submit claims, beliefs, or responses. These are analyzed for epistemic weaknesses such as undefined concepts, hidden premises, and unsupported inferences. The system responds with targeted Socratic prompts and explicit feedback. Only when a response meets a defined rigor threshold does the next layer of inquiry or content unlock.

This tool is intended for serious learners, researchers, and builders who value disciplined thinking and intellectual responsibility. It is not designed for passive consumption, motivational productivity workflows, or AI-driven shortcutting of reasoning. Friction here is not an obstacle—it is the mechanism.

---

## Conceptual Overview

SocaNET treats thinking as an activity that benefits from constraint. Claims are not accepted at face value. Responses are not judged holistically or impressionistically. Instead, reasoning is evaluated against explicit, legible criteria that reward clarity, explicit assumptions, and logical structure.

The system assumes that poorly specified ideas are more dangerous than slow progress. As a result, interaction may feel resistant at times. This resistance is intentional. It mirrors the experience of a rigorous seminar, a research notebook, or a demanding mentor who refuses to accept vague answers.

---

## Core Systems

### Socratic Assumption-Dismantling Engine

The Socratic Engine analyzes user-submitted claims and responses to identify epistemic gaps. It flags undefined terms, missing justifications, compressed reasoning, and implicit premises. For each detected issue, it generates targeted Socratic prompts that force refinement rather than correction.

The engine is rule-based and fully transparent in v1. There is no opaque “AI judgment.” Every challenge is traceable to a documented heuristic, making the system inspectable, debuggable, and extensible.

---

### Rigor Evaluation and Gatekeeping

Responses are evaluated against explicit rigor criteria, such as argumentative sufficiency, surfaced assumptions, and logical inference markers. Each submission receives structured feedback explaining why it passes or fails.

Progression is gated. Users cannot advance until their reasoning meets a defined threshold. Failure is informative rather than punitive: the system explains what epistemic move is missing and why it matters.

All gatekeeping logic is enforced server-side. The frontend cannot bypass rigor checks.

---

### Knowledge Layers

Knowledge is modeled as gated layers rather than a feed. Each layer is framed by a guiding question and associated rigor requirements. Users cannot scroll endlessly or binge content. Progression is discrete, intentional, and earned.

This structure prevents the accumulation of shallow understanding and encourages depth before breadth.

---

## System Architecture

The codebase is divided into three primary domains.

The core reasoning logic lives in the `core/` directory and is framework-agnostic. It contains the Socratic engine, rigor evaluator, and progression logic. These modules are pure TypeScript and can be reused across interfaces or replaced with more advanced implementations later.

The backend acts as the epistemic authority. It evaluates reasoning, enforces progression rules, and exposes a small API surface. Local persistence is used for transparency and inspectability.

The frontend is intentionally minimal. It serves as a friction surface rather than a productivity dashboard. There are no animations, no infinite scroll, and no optimistic advancement.

---

## Installation and Local Setup

### Prerequisites

You will need:
- Node.js (v18 or later)
- npm or yarn
- A local development environment (macOS, Linux, or Windows)

---

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/rigor-baseline.git
cd rigor-baseline
````

---

### Install Dependencies

Install root dependencies (if present):

```bash
npm install
```

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

---

### Run the System Locally

Start the backend server:

```bash
cd backend
npm run dev
```

The backend will run on:

```
http://localhost:3001
```

Start the frontend:

```bash
cd ../frontend
npm run dev
```

The frontend will be available at:

```
http://localhost:5173
```

---

## Expected First-Run Behavior

On first use, you will be prompted to submit a claim. The system will return Socratic prompts identifying ambiguities or gaps in your reasoning. You will not be allowed to advance until your response satisfies the rigor evaluation criteria.

This behavior is intentional and central to the product.

---

## Extending the System

You can add or modify Socratic prompts in `core/socraticEngine.ts`. Rigor thresholds and evaluation criteria live in `core/rigorEvaluator.ts`. Progression rules are defined in `core/progressionLogic.ts`.

The system is designed so that heuristic logic can later be replaced with an LLM-backed implementation without altering the UI or progression guarantees.

---

## Philosophy

Clear thinking precedes useful output. Productivity without rigor is motion without direction. This system exists to enforce epistemic responsibility by design, not by suggestion.

If you believe that ideas should earn their way forward, this tool is for you.
