# Quick Fix Deployment Script
# This script commits and pushes the Vercel configuration fix

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Vercel SPA Routing Fix Deployment" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Show what changed
Write-Host "Step 1: Reviewing Changes" -ForegroundColor Yellow
Write-Host ""
git diff vercel.json
Write-Host ""

# Step 2: Stage the changes
Write-Host "Step 2: Staging Changes" -ForegroundColor Yellow
git add vercel.json

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Changes staged successfully!" -ForegroundColor Green
} else {
    Write-Host "✗ Failed to stage changes" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Step 3: Commit
Write-Host "Step 3: Committing Changes" -ForegroundColor Yellow
git commit -m "Fix: Add SPA routing configuration for Vercel deployment"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Changes committed successfully!" -ForegroundColor Green
} else {
    Write-Host "✗ Commit failed" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Step 4: Push
Write-Host "Step 4: Pushing to GitHub" -ForegroundColor Yellow
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Changes pushed successfully!" -ForegroundColor Green
} else {
    Write-Host "✗ Push failed - you may need to authenticate" -ForegroundColor Red
    Write-Host "Try running: gh auth login" -ForegroundColor Yellow
    exit 1
}
Write-Host ""

# Step 5: Monitor deployment
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Deployment Initiated!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host ""
Write-Host "1. Go to your Vercel dashboard: https://vercel.com/dashboard" -ForegroundColor White
Write-Host "2. Watch for the automatic deployment (usually takes 1-2 minutes)" -ForegroundColor White
Write-Host "3. Once deployed, visit: https://visionarybyteworks.com" -ForegroundColor White
Write-Host "4. Verify all sections are visible" -ForegroundColor White
Write-Host ""
Write-Host "If you don't see automatic deployment:" -ForegroundColor Yellow
Write-Host "- Go to your project settings in Vercel" -ForegroundColor White
Write-Host "- Click Deployments and then Redeploy" -ForegroundColor White
Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "Deployment script completed!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
