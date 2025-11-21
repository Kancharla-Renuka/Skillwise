# GitHub Setup Script for Inventory Management System (PowerShell)

Write-Host "🚀 Setting up GitHub repository for deployment..." -ForegroundColor Cyan

# Check if git is initialized
if (-not (Test-Path .git)) {
    Write-Host "📦 Initializing git repository..." -ForegroundColor Yellow
    git init
}

# Add all files
Write-Host "📝 Adding files to git..." -ForegroundColor Yellow
git add .

# Create initial commit
Write-Host "💾 Creating initial commit..." -ForegroundColor Yellow
git commit -m "Initial commit: Inventory Management System ready for deployment"

# Get repository URL from user
Write-Host ""
Write-Host "Please provide your GitHub repository URL:" -ForegroundColor Cyan
Write-Host "Example: https://github.com/username/inventory-management.git" -ForegroundColor Gray
$repoUrl = Read-Host "Repository URL"

if ([string]::IsNullOrWhiteSpace($repoUrl)) {
    Write-Host "❌ No repository URL provided. Exiting." -ForegroundColor Red
    exit 1
}

# Add remote
Write-Host "🔗 Adding remote repository..." -ForegroundColor Yellow
$remoteExists = git remote get-url origin 2>$null
if ($LASTEXITCODE -eq 0) {
    git remote set-url origin $repoUrl
} else {
    git remote add origin $repoUrl
}

# Push to GitHub
Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
git branch -M main
git push -u origin main

Write-Host ""
Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
Write-Host "📋 Repository: $repoUrl" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Deploy backend to Render/Railway" -ForegroundColor White
Write-Host "2. Deploy frontend to Netlify/Vercel" -ForegroundColor White
Write-Host "3. Update CORS settings with frontend URL" -ForegroundColor White
Write-Host ""
Write-Host "See DEPLOYMENT.md for detailed instructions." -ForegroundColor Gray

