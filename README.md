# Jirath Kanaraksanti — SA / BA / PM & AI Workflow Solutions Portfolio

Personal portfolio website built with **React (Vite) + Tailwind CSS + Lucide Icons**, featuring **EN / TH bilingual switching**, interactive **System Architecture Diagrams**, **Data Contracts**, **Risk Matrices**, a live playable game demo integration on **itch.io**, and an ATS-friendly printable **Executive CV Modal**.

## Features
- **Bilingual Support (`EN | TH`):** Instant switching between English and professional Thai tailored for Thai HR & Tech Hiring Managers.
- **Interactive System Architecture Diagrams:**
  1. **HornBill ERP System:** 7-Step Interactive State Machine, Gemini OCR Pipeline, and highlighted Error Handling & Rate-Limit Auto-Discovery Loop.
  2. **Monito AnurakSciCU:** Online Mode (Streamlit ↔ PBKDF2 Auth ↔ Google Sheets CMS), Hamiltonian Cycle Closed-Loop Solver, and Zero-Internet `openpyxl` Forest Fallback.
  3. **Mystery of the Forest: Hidden Village:** Game Loop, Async Scene Loader, Branching Narrative Contradiction Validator, live playable demo on [itch.io](https://1n1ndaggfoo.itch.io/mystery-of-the-forest-hidden-village), and clean source repository on [GitHub](https://github.com/1n1nJirath/Mystery-of-the-Forest-Hidden-Village).
- **ATS-Ready CV Modal:** Clean print-to-PDF layout matching the active language (`EN` or `TH`).

---

## Local Development & Verification

```powershell
cd C:\Users\User\.gemini\antigravity\scratch\jirath-portfolio
npm install
npm run dev
```

Verify production build:
```powershell
npm run build
npm run preview
```

---

## Publish to GitHub (`https://github.com/1n1nJirath/jirath-portfolio`) & Deploy on Vercel

### Step 1: Create the Repository on GitHub
Create a new public repository named **`jirath-portfolio`** under `https://github.com/1n1nJirath` (leave README / `.gitignore` unchecked).

### Step 2: Push Portfolio Source from PowerShell
```powershell
cd C:\Users\User\.gemini\antigravity\scratch\jirath-portfolio

git init
git branch -M main
git add .
git commit -m "feat: bilingual SA/BA/PM portfolio with itch.io live demo and Vercel SPA config"

git remote add origin https://github.com/1n1nJirath/jirath-portfolio.git
git push -u origin main
```

### Step 3: Zero-Config Deploy on Vercel
`vercel.json` is pre-configured for Vite (`npm run build` → `dist/`) with SPA rewrite rules (`/(.*) → /index.html`).

**Option A — Vercel Dashboard (Recommended for Auto-Deploy on `git push`):**
1. Sign in at [vercel.com](https://vercel.com) using your GitHub account.
2. Click **Add New → Project** and select **`1n1nJirath/jirath-portfolio`**.
3. Keep the auto-detected Vite settings (`Build Command: npm run build`, `Output Directory: dist`).
4. Click **Deploy**.

**Option B — Vercel CLI (Direct from PowerShell):**
```powershell
cd C:\Users\User\.gemini\antigravity\scratch\jirath-portfolio
npm install -g vercel
vercel login
vercel --prod
```

---

## Senior Project Game Setup
For pushing **Mystery of the Forest: Hidden Village** (`C:\1.thaithai\Unity\Projecthidden`) and publishing its playable build (`C:\1.thaithai\year 4.1\Senior Project`) to GitHub Releases alongside the live [itch.io page](https://1n1ndaggfoo.itch.io/mystery-of-the-forest-hidden-village), see [UNITY_SETUP_GUIDE.md](./UNITY_SETUP_GUIDE.md).
