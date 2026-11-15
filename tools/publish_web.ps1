# Updates the branch gh-pages (web version) from app/src/main/assets/www of the current branch.
# Usage (in the repository folder):  powershell -File tools\publish_web.ps1 [-Message "Update web version (app 1.8.7)"] [-NoPush]
# If the branch gh-pages is already checked out in another worktree (for example arbeit/pages), that worktree is used and kept;
# otherwise a temporary worktree is created and removed again. Nothing is committed when the web version did not change.
# The push uses the GitHub CLI as credential helper, because the Git Credential Manager may hang.
param([string]$Message = "Update web version", [switch]$NoPush)
$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$www = Join-Path $root "app\src\main\assets\www"
if (-not (Test-Path $www)) { throw "Web files not found: $www" }

# Is gh-pages already checked out somewhere?
$work = $null
$pfad = $null
foreach ($zeile in (git -C $root worktree list --porcelain)) {
    if ($zeile -like "worktree *") { $pfad = $zeile.Substring(9) }
    elseif ($zeile -eq "branch refs/heads/gh-pages") { $work = $pfad }
}
$temporaer = $false
if (-not $work) {
    $work = Join-Path $env:TEMP "lfd-koop-pages"
    if (Test-Path $work) { Remove-Item $work -Recurse -Force }
    git -C $root worktree prune
    git -C $root worktree add $work gh-pages
    $temporaer = $true
}
Write-Host "Working folder for gh-pages: $work"

try {
    if (git -C $work status --porcelain) { throw "The worktree $work has uncommitted changes; commit or discard them first." }
    # replace everything except the Git folder/file, then copy the current web files
    Get-ChildItem $work -Force | Where-Object { $_.Name -ne ".git" } | Remove-Item -Recurse -Force
    Copy-Item (Join-Path $www "*") $work -Recurse
    New-Item (Join-Path $work ".nojekyll") -ItemType File -Force | Out-Null
    git -C $work add -A
    if (git -C $work status --porcelain) {
        git -C $work commit -m $Message
        if ($NoPush) {
            Write-Host "Committed locally, not pushed (-NoPush)."
        } else {
            git -C $work -c credential.helper= -c "credential.helper=!gh auth git-credential" push origin gh-pages
        }
    } else {
        Write-Host "The web version is already up to date; nothing to commit."
    }
} finally {
    if ($temporaer) { git -C $root worktree remove $work --force }
}
