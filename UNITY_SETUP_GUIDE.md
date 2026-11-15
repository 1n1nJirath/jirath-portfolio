# Unity Source & Playable Build Deployment Guide
**Project:** `Mystery of the Forest: Hidden Village`  
**Target GitHub Repository:** `https://github.com/1n1nJirath/Mystery-of-the-Forest-Hidden-Village`

This guide uses your exact local Windows directories:
- **Unity Source Project:** `C:\1.thaithai\Unity\Projecthidden`
- **Playable Build / Working Files:** `C:\1.thaithai\year 4.1\Senior Project`

Ready-to-use template files have already been generated for you inside:
- `C:\Users\User\.gemini\antigravity\scratch\jirath-portfolio\unity-repo-templates\.gitignore`
- `C:\Users\User\.gemini\antigravity\scratch\jirath-portfolio\unity-repo-templates\README.md`

---

## Part 1: Push Clean Unity Source Code (`main` Branch)

Only `Assets/`, `Packages/`, `ProjectSettings/`, `.gitignore`, and `README.md` should be pushed to `main`. Heavy auto-generated folders (`Library/`, `Temp/`, `Obj/`, `Builds/`) are automatically excluded.

### 1. Create the Repository on GitHub
Create an empty repository named **`Mystery-of-the-Forest-Hidden-Village`** under `https://github.com/1n1nJirath` (do **not** check "Add a README" or "Add .gitignore" since we copy them locally).

### 2. Copy `.gitignore` and `README.md`, Verify, and Push (PowerShell)
Run these exact commands in **PowerShell**:

```powershell
# 1. Navigate to your Unity project root
cd "C:\1.thaithai\Unity\Projecthidden"

# 2. Copy the Unity .gitignore and SA/System Design README.md templates
Copy-Item "C:\Users\User\.gemini\antigravity\scratch\jirath-portfolio\unity-repo-templates\.gitignore" -Destination ".\.gitignore" -Force
Copy-Item "C:\Users\User\.gemini\antigravity\scratch\jirath-portfolio\unity-repo-templates\README.md" -Destination ".\README.md" -Force

# 3. Initialize Git on the main branch
git init
git branch -M main

# 4. Stage ONLY the core Unity source folders + .gitignore + README.md
git add .gitignore README.md Assets Packages ProjectSettings

# 5. Double-check staged files (Verify NO Library/, Temp/, Obj/, or Builds/ are listed!)
git status

# 6. Commit & Push to GitHub
git commit -m "feat: add Mystery of the Forest Unity source and system design documentation"
git remote add origin https://github.com/1n1nJirath/Mystery-of-the-Forest-Hidden-Village.git
git push -u origin main
```

> **Tip:** If you have large `.png`, `.wav`, or `.psd` files (>50 MB each), check file sizes first with:
> ```powershell
> Get-ChildItem "C:\1.thaithai\Unity\Projecthidden\Assets" -Recurse -File | Where-Object { $_.Length -gt 50MB } | Select-Object FullName, @{Name="MB";Expression={[math]::Round($_.Length/1MB,2)}}
> ```
> If any single file exceeds 100 MB, install Git LFS (`git lfs install` and `git lfs track "*.psd"`) before committing.

---

## Part 2: Package & Upload Playable Build (`v1.0.0 - Playable Build`)

Never commit compiled `.exe` or `Builds/` directly into Git history. Instead, zip the playable build from `C:\1.thaithai\year 4.1\Senior Project` and attach it to **GitHub Releases**.

### 1. Inspect and Zip the Playable Build in PowerShell
First inspect what is inside `C:\1.thaithai\year 4.1\Senior Project` so you zip the exact compiled game folder (the folder containing your `.exe` and `*_Data/` directory):

```powershell
# 1. Inspect the Senior Project folder contents
Get-ChildItem "C:\1.thaithai\year 4.1\Senior Project"

# 2. Example: If the compiled build folder is named "Build" (or the entire folder is the build),
#    compress it into a clean release zip in your Desktop or parent folder:
Compress-Archive -Path "C:\1.thaithai\year 4.1\Senior Project\*" -DestinationPath "$env:USERPROFILE\Desktop\Mystery-of-the-Forest-Hidden-Village-v1.0.0-Win64.zip" -Force
```
*(Note: If `C:\1.thaithai\year 4.1\Senior Project` contains both working documents and a dedicated build subfolder like `GameBuild\`, pass `"C:\1.thaithai\year 4.1\Senior Project\GameBuild\*"` to `Compress-Archive` so players only download the clean playable build.)*

### 2. Upload to GitHub Releases

**Option A — Via GitHub Web UI (Fastest):**
1. Open `https://github.com/1n1nJirath/Mystery-of-the-Forest-Hidden-Village/releases/new`.
2. **Choose a tag:** Type `v1.0.0` and click **Create new tag: v1.0.0 on publish**.
3. **Release title:** `v1.0.0 - Playable Build`.
4. **Description:**
   ```markdown
   ### Mystery of the Forest: Hidden Village (Windows Playable Build)
   - Senior CS Project (Chulalongkorn University)
   - **How to Play:** Download `Mystery-of-the-Forest-Hidden-Village-v1.0.0-Win64.zip`, extract all files, and launch the `.exe`.
   ```
5. Drag and drop `Mystery-of-the-Forest-Hidden-Village-v1.0.0-Win64.zip` from your Desktop into **Attach binaries**.
6. Click **Publish release**.

**Option B — Via GitHub CLI (`gh`):**
```powershell
gh auth login
gh release create v1.0.0 "$env:USERPROFILE\Desktop\Mystery-of-the-Forest-Hidden-Village-v1.0.0-Win64.zip" `
  --repo 1n1nJirath/Mystery-of-the-Forest-Hidden-Village `
  --title "v1.0.0 - Playable Build" `
  --notes "Playable Windows build for Mystery of the Forest: Hidden Village (Senior CS Project). Extract the zip and run the executable."
```

Once published, both buttons on your portfolio (`View Source & Playable Build (GitHub)` and `Playable Build (v1.0.0)`) will route recruiters and hiring managers directly to the live repository and downloadable release.
