#!/bin/bash

echo "========================================"
echo "  Portfolio Domain Launch Assistant"
echo "  Deploying to: visionarybyteworks.com"
echo "========================================"
echo ""

# Step 1: Git Configuration
echo "📝 Step 1: Git Configuration"
echo ""

read -p "Enter your full name (e.g., John Doe): " gitName
read -p "Enter your email address: " gitEmail

git config --global user.name "$gitName"
git config --global user.email "$gitEmail"

echo "✅ Git configured successfully!"
echo ""

# Step 2: Commit Code
echo "📦 Step 2: Committing Code"
git commit -m "Initial commit - Ready for deployment to visionarybyteworks.com"

if [ $? -eq 0 ]; then
    echo "✅ Code committed successfully!"
else
    echo "❌ Commit failed. Please check the error above."
    exit 1
fi
echo ""

# Step 3: GitHub Instructions
echo "========================================"
echo "📋 Step 3: Create GitHub Repository"
echo "========================================"
echo ""
echo "Please follow these steps:"
echo "1. Open your browser and go to: https://github.com/new"
echo "2. Repository name: portfolio (or visionarybyteworks)"
echo "3. Keep it PUBLIC"
echo "4. DO NOT initialize with README, .gitignore, or license"
echo "5. Click 'Create repository'"
echo ""

read -p "Have you created the GitHub repository? (yes/no): " continue

if [ "$continue" != "yes" ]; then
    echo "Please create the repository first, then run this script again."
    exit 0
fi

echo ""
read -p "Enter your GitHub repository URL (e.g., https://github.com/username/portfolio.git): " repoUrl

# Step 4: Push to GitHub
echo ""
echo "📤 Step 4: Pushing to GitHub"

git remote add origin "$repoUrl"
git branch -M main
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Code pushed to GitHub successfully!"
else
    echo "❌ Push failed. You may need to authenticate with GitHub."
    echo "Try running: gh auth login"
    exit 1
fi

echo ""
echo "========================================"
echo "🎉 GitHub Setup Complete!"
echo "========================================"
echo ""

# Step 5: Netlify Instructions
echo "========================================"
echo "🌐 Step 5: Deploy to Netlify"
echo "========================================"
echo ""
echo "Next Steps (Manual):"
echo ""
echo "1. Go to: https://app.netlify.com/signup"
echo "   - Sign up with your GitHub account"
echo ""
echo "2. Click 'Add new site' → 'Import an existing project'"
echo ""
echo "3. Choose 'GitHub' and authorize Netlify"
echo ""
echo "4. Select your 'portfolio' repository"
echo ""
echo "5. Build settings (should auto-detect):"
echo "   - Build command: npm run build"
echo "   - Publish directory: dist"
echo ""
echo "6. Click 'Deploy site'"
echo ""
echo "7. Wait ~2 minutes for deployment"
echo ""
echo "8. Once deployed, go to: Site settings → Domain management"
echo ""
echo "9. Click 'Add custom domain'"
echo "   - Enter: visionarybyteworks.com"
echo ""
echo "10. Follow DNS configuration instructions from Netlify"
echo ""
echo "========================================"
echo "📚 Additional Resources"
echo "========================================"
echo ""
echo "Deployment Guide: ./DEPLOYMENT_CHECKLIST.md"
echo "Netlify Dashboard: https://app.netlify.com"
echo "DNS Checker: https://dnschecker.org"
echo ""
echo "========================================"
echo "✨ Good luck with your deployment! ✨"
echo "========================================"
