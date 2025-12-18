# Domain Launch Script for visionarybyteworks.com

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Portfolio Domain Launch Assistant" -ForegroundColor Cyan
Write-Host "  Deploying to: visionarybyteworks.com" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Git Configuration
Write-Host "Step 1: Git Configuration" -ForegroundColor Yellow
Write-Host ""

$gitName = Read-Host "Enter your full name"
$gitEmail = Read-Host "Enter your email address"

git config --global user.name "$gitName"
git config --global user.email "$gitEmail"

Write-Host "Git configured successfully!" -ForegroundColor Green
Write-Host ""

# Step 2: Commit Code
Write-Host "Step 2: Committing Code" -ForegroundColor Yellow
git commit -m "Initial commit - Ready for deployment to visionarybyteworks.com"

if ($LASTEXITCODE -eq 0) {
    Write-Host "Code committed successfully!" -ForegroundColor Green
} else {
    Write-Host "Commit failed. Please check the error above." -ForegroundColor Red
    exit 1
}
Write-Host ""

# Step 3: GitHub Instructions
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Step 3: Create GitHub Repository" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Please follow these steps:" -ForegroundColor White
Write-Host "1. Open your browser and go to: https://github.com/new" -ForegroundColor White
Write-Host "2. Repository name: portfolio or visionarybyteworks" -ForegroundColor White
Write-Host "3. Keep it PUBLIC" -ForegroundColor White
Write-Host "4. DO NOT initialize with README, .gitignore, or license" -ForegroundColor White
Write-Host "5. Click Create repository" -ForegroundColor White
Write-Host ""

$continue = Read-Host "Have you created the GitHub repository? (yes/no)"

if ($continue -ne "yes") {
    Write-Host "Please create the repository first, then run this script again." -ForegroundColor Yellow
    exit 0
}

Write-Host ""
$repoUrl = Read-Host "Enter your GitHub repository URL"

# Step 4: Push to GitHub
Write-Host ""
Write-Host "Step 4: Pushing to GitHub" -ForegroundColor Yellow

git remote add origin $repoUrl
git branch -M main
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "Code pushed to GitHub successfully!" -ForegroundColor Green
} else {
    Write-Host "Push failed. You may need to authenticate with GitHub." -ForegroundColor Red
    Write-Host "Try running: gh auth login" -ForegroundColor Yellow
    exit 1
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "GitHub Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 5: Netlify Instructions
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Step 5: Deploy to Netlify" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next Steps (Manual):" -ForegroundColor White
Write-Host ""
Write-Host "1. Go to: https://app.netlify.com/signup" -ForegroundColor Cyan
Write-Host "   - Sign up with your GitHub account" -ForegroundColor White
Write-Host ""
Write-Host "2. Click Add new site then Import an existing project" -ForegroundColor Cyan
Write-Host ""
Write-Host "3. Choose GitHub and authorize Netlify" -ForegroundColor Cyan
Write-Host ""
Write-Host "4. Select your portfolio repository" -ForegroundColor Cyan
Write-Host ""
Write-Host "5. Build settings (should auto-detect):" -ForegroundColor Cyan
Write-Host "   - Build command: npm run build" -ForegroundColor White
Write-Host "   - Publish directory: dist" -ForegroundColor White
Write-Host ""
Write-Host "6. Click Deploy site" -ForegroundColor Cyan
Write-Host ""
Write-Host "7. Wait ~2 minutes for deployment" -ForegroundColor Cyan
Write-Host ""
Write-Host "8. Once deployed, go to: Site settings then Domain management" -ForegroundColor Cyan
Write-Host ""
Write-Host "9. Click Add custom domain" -ForegroundColor Cyan
Write-Host "   - Enter: visionarybyteworks.com" -ForegroundColor White
Write-Host ""
Write-Host "10. Follow DNS configuration instructions from Netlify" -ForegroundColor Cyan
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Additional Resources" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Deployment Guide: .\DEPLOYMENT_CHECKLIST.md" -ForegroundColor White
Write-Host "Netlify Dashboard: https://app.netlify.com" -ForegroundColor White
Write-Host "DNS Checker: https://dnschecker.org" -ForegroundColor White
Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "Good luck with your deployment!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
