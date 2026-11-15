# Mystery of the Forest: Hidden Village

> **Senior Computer Science Project (Aug 2025 – May 2026)** — Chulalongkorn University  
> **Role:** Core Systems & Narrative Designer  
> **Tech Stack:** Unity, C#, State & Dialogue Logic, Async Scene Loading Pipeline

---

## Executive Overview & System Design Focus

**Mystery of the Forest: Hidden Village** is a 2D interactive mystery game engineered with a strong emphasis on **Systems Analysis, Deterministic State Logic, and Contradiction-Free Branching Narrative Design**.

Rather than relying on ad-hoc dialogue triggers, the project treats story progression and investigation mechanics as a strict **Finite State & Rule Validation Problem**—ensuring players can explore clues in non-linear order without triggering plot contradictions, deadlocked quests, or scene-loading stutters.

---

## System Architecture

```text
[Player Interaction & Clue Discovery]
                 │
                 ▼
  [Async Scene & Asset Loader]
                 │
                 ▼
[Branching Narrative State Machine & Contradiction Validator]
                 │
                 ▼
   [Dialogue Flow & UI Manager]
                 │
                 ▼
  [Multiple Endings Resolution]
```

### Core Architectural Modules
1. **Global Clue & World-State Registry (`C#`)**
   - Single-source-of-truth state container tracking discovered clues, investigation flags, NPC trust states, and timeline milestones.
2. **Contradiction Validator & Precondition Gate**
   - Evaluates Boolean (`AND` / `OR`) preconditions before exposing dialogue branches, guaranteeing NPCs never reference undiscovered evidence or mutually exclusive timeline branches.
   - Provides deterministic fallback branches to prevent soft-locks.
3. **Asynchronous Scene & Asset Pipeline**
   - Uses non-blocking `AsyncOperation` scene loading decoupled from UI transition overlays to prevent main-thread frame drops between forest and village zones.
4. **Responsive Dialogue Flow & UI Manager**
   - Anchored canvas scaling and modular journal/dialogue UI bindings for consistent readability across screen resolutions.

---

## Repository Structure (`main` Branch)

This repository intentionally tracks **only clean Unity source and configuration directories**:
- `Assets/` — Game scripts (`C#`), scenes, narrative assets, UI prefabs, and artwork
- `Packages/` — Unity Package Manager manifest (`manifest.json`, `packages-lock.json`)
- `ProjectSettings/` — Engine, input, quality, and build settings

*(Generated directories `Library/`, `Temp/`, `Obj/`, `Builds/`, and compiled executables are excluded via `.gitignore` and distributed separately via GitHub Releases.)*

---

## Playable Build (itch.io & Windows Release)

- **Play / Download Live on itch.io:** [1n1ndaggfoo.itch.io/mystery-of-the-forest-hidden-village](https://1n1ndaggfoo.itch.io/mystery-of-the-forest-hidden-village)
- **GitHub Releases Archive:** [**`v1.0.0 - Playable Build`**](https://github.com/1n1nJirath/Mystery-of-the-Forest-Hidden-Village/releases)

1. Play in browser / download directly from itch.io, or download the `.zip` archive from the latest GitHub Release.
2. If using the Windows `.zip` archive, extract all files and run the executable inside the extracted folder.

---

## Author
**Jirath Kanaraksanti**  
B.Sc. in Mathematics and Computer Science (Major in Computer Science), Chulalongkorn University  
- Portfolio / Contact: `thaithaiji@gmail.com`  
- LinkedIn: [linkedin.com/in/jirathkana](https://linkedin.com/in/jirathkana)  
- GitHub: [github.com/1n1nJirath](https://github.com/1n1nJirath)
