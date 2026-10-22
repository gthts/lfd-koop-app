# Updates the branch gh-pages (web version) from app/src/main/assets/www of the current branch.
# Usage (in the repository folder):  powershell -File tools\publish_web.ps1
# Push with the GitHub CLI as credential helper if the Git Credential Manager hangs:
#   git -c credential.helper= -c "credential.helper=!gh auth git-credential" push origin gh-pages
$ErrorActionPreference = "Stop"
$root = Split-Path $PSScriptRoot -Parent
$www = Join-Path $root "app\src\main\assets\www"
$work = Join-Path $env:TEMP "lfd-koop-pages"
if (Test-Path $work) { Remove-Item $work -Recurse -Force }
git -C $root worktree prune
git -C $root worktree add $work gh-pages
Get-ChildItem $work -Force | Where-Object { $_.Name -ne ".git" } | Remove-Item -Recurse -Force
Copy-Item (Join-Path $www "*") $work -Recurse
New-Item (Join-Path $work ".nojekyll") -ItemType File -Force | Out-Null
git -C $work add -A
git -C $work commit -m "Update web version"
git -C $work push origin gh-pages
git -C $root worktree remove $work --force
