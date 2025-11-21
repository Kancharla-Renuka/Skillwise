#!/bin/bash

# GitHub Setup Script for Inventory Management System

echo "🚀 Setting up GitHub repository for deployment..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
fi

# Add all files
echo "📝 Adding files to git..."
git add .

# Create initial commit
echo "💾 Creating initial commit..."
git commit -m "Initial commit: Inventory Management System ready for deployment"

# Get repository URL from user
echo ""
echo "Please provide your GitHub repository URL:"
echo "Example: https://github.com/username/inventory-management.git"
read -p "Repository URL: " repo_url

if [ -z "$repo_url" ]; then
    echo "❌ No repository URL provided. Exiting."
    exit 1
fi

# Add remote
echo "🔗 Adding remote repository..."
git remote add origin "$repo_url" 2>/dev/null || git remote set-url origin "$repo_url"

# Push to GitHub
echo "📤 Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "✅ Successfully pushed to GitHub!"
echo "📋 Repository: $repo_url"
echo ""
echo "Next steps:"
echo "1. Deploy backend to Render/Railway"
echo "2. Deploy frontend to Netlify/Vercel"
echo "3. Update CORS settings with frontend URL"
echo ""
echo "See DEPLOYMENT.md for detailed instructions."

