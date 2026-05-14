# Deploy GenbaSense to GitHub Pages
# Repo: https://github.com/agvylegzhanin-r2d2/genbasense
# Live:  https://agvylegzhanin-r2d2.github.io/genbasense/

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

Push-Location $root
try {
    if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
        Write-Host "ERROR: Git is not installed." -ForegroundColor Red
        exit 1
    }

    git add .
    git status

    $msg = Read-Host "Commit message (or press Enter for 'Update site')"
    if ([string]::IsNullOrWhiteSpace($msg)) { $msg = "Update site" }

    git commit -m $msg
    git push origin main

    Write-Host "Done: https://agvylegzhanin-r2d2.github.io/genbasense/" -ForegroundColor Green
}
finally {
    Pop-Location
}
