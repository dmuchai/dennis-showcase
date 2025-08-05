# Deployment Guide to Vercel

## Prerequisites
- GitHub account
- Vercel account (sign up at vercel.com)
- Git installed locally

## Steps to Deploy

### 1. Prepare Your Repository
```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "Prepare for Vercel deployment - Remove Lovable dependencies"

# Add remote repository (replace with your GitHub repo URL)
git remote add origin https://github.com/dennismuchai/dennis-showcase.git

# Push to GitHub
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Via Vercel CLI (Recommended)
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy (run from project root)
vercel

# Follow the prompts:
# - Link to existing project? N
# - What's your project's name? dennis-muchai-portfolio
# - In which directory is your code located? ./
# - Want to override the settings? N
```

#### Option B: Via Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### 3. Environment Variables
In Vercel dashboard, go to Project Settings > Environment Variables and add:
```
VITE_SUPABASE_URL=https://odhwbafwawrsbustpnlr.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kaHdiYWZ3YXdyc2J1c3RwbmxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQzNzE5MjksImV4cCI6MjA2OTk0NzkyOX0.a6Wcf4UGxhcMiss--UTcItHA0Uo_GyU_GRGz56XpNvM
VITE_APP_URL=https://your-vercel-url.vercel.app
```

### 4. Custom Domain (Optional)
1. In Vercel dashboard, go to Project Settings > Domains
2. Add your custom domain
3. Configure DNS settings as instructed

## Testing Local Build
Before deploying, test the production build locally:
```bash
npm run build
npm run preview
```

## Automatic Deployments
Vercel will automatically deploy when you push to your main branch on GitHub.

## Troubleshooting
- Check build logs in Vercel dashboard
- Ensure all environment variables are set
- Verify package.json scripts are correct
