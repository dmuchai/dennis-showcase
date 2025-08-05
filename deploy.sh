#!/bin/bash

# Deployment script for Vercel
echo "🚀 Deploying Dennis Muchai Portfolio to Vercel"
echo "================================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    git add .
    git commit -m "Initial commit - Portfolio ready for deployment"
else
    echo "📝 Committing latest changes..."
    git add .
    git commit -m "Update portfolio for Vercel deployment" || echo "No changes to commit"
fi

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Run build test
echo "🔨 Testing production build..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix errors before deploying."
    exit 1
fi

echo "✅ Build successful!"

# Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "🎉 Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Update your environment variables in Vercel dashboard"
echo "2. Configure custom domain if needed"
echo "3. Set up analytics and monitoring"
echo ""
echo "Your portfolio should now be live! 🌟"
