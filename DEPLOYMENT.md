# 🚀 Deployment Guide - Dr.C StarSound

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. **Repository name**: `starsound`
3. **Owner**: Select `csounder`
4. **Description**: `🌟 Dr.C - StarSound: Transform the night sky into sound. Real-time interactive star sonification powered by Csound.`
5. **Visibility**: Public
6. **DO NOT** initialize with README (we already have one)
7. Click **"Create repository"**

## Step 2: Push to GitHub

Run these commands in the terminal:

```bash
cd "/Users/richardboulanger/dB-Studio/Dr.C-StarChartSonification"

# Add GitHub remote
git remote add origin https://github.com/csounder/starsound.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Netlify

### Option A: Netlify CLI (Fastest)

```bash
# Install Netlify CLI if not already installed
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy (from the project directory)
cd "/Users/richardboulanger/dB-Studio/Dr.C-StarChartSonification"
netlify deploy --prod

# Follow the prompts:
# - Create & configure a new site: Yes
# - Team: Select your team
# - Site name: starsound (or leave blank for random)
# - Publish directory: . (current directory)
```

### Option B: Netlify Web UI (Recommended)

1. Go to https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Click **"GitHub"**
4. Authorize Netlify if needed
5. Select **`csounder/starsound`** repository
6. **Build settings**:
   - Branch to deploy: `main`
   - Build command: (leave empty)
   - Publish directory: `.` (dot - current directory)
7. Click **"Deploy site"**

### Option C: Drag & Drop (Simplest)

1. Go to https://app.netlify.com/drop
2. Drag the entire folder (excluding `_archive`) into the drop zone
3. Wait for upload
4. Your site is live!

## Step 4: Configure Custom Domain (Optional)

### In Netlify:

1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter: `starsound.netlify.app` (or your custom domain)
4. Follow DNS configuration instructions if using custom domain

## Step 5: Update Repository Links

After deployment, update these files with your actual URLs:

### README.md

```markdown
**Live Demo**: https://starsound.netlify.app
**GitHub**: https://github.com/csounder/starsound
```

### index.html (landing page)

Update the GitHub link:

```html
<a href="https://github.com/csounder/starsound" class="secondary-btn"
  >💻 GitHub</a
>
```

Then commit and push:

```bash
git add README.md index.html
git commit -m "Update deployment URLs"
git push
```

## Continuous Deployment

Once connected to GitHub, Netlify will automatically:

- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Provide deploy previews for testing

## Custom Configuration (Optional)

Create `netlify.toml` in project root for advanced settings:

```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "no-referrer"
```

## Verify Deployment

1. Visit your Netlify URL: https://starsound.netlify.app
2. Check that landing page loads
3. Click "Launch StarSound" → app.html loads
4. Click "▶ Start Audio Engine" → audio works
5. Test keyboard shortcuts (M, S, R, X, Space, 1, 2, 3)
6. Test presets and randomization

## Troubleshooting

### Site doesn't load

- Check Netlify build log for errors
- Verify all files were pushed to GitHub
- Check that `index.html` and `app.html` are in root directory

### Audio doesn't work

- This is browser-based, check browser console (F12)
- Test in Chrome/Edge (best compatibility)
- Ensure user clicked "Start Audio Engine"

### Files missing

- Check `.gitignore` - ensure important files aren't excluded
- Run `git status` to see what's tracked
- Push again: `git push`

## Performance Optimization

### For faster loading:

1. **Enable Gzip** (Netlify does this automatically)
2. **Enable HTTP/2** (Netlify does this automatically)
3. **Add caching headers** (use netlify.toml)

### Monitor:

- Netlify Analytics (paid feature)
- Google Analytics (add to index.html)
- Real User Monitoring (Netlify)

## Maintenance

### Update the app:

```bash
# Make changes
git add .
git commit -m "Description of changes"
git push

# Netlify auto-deploys!
```

### Rollback if needed:

1. Go to Netlify dashboard
2. **Deploys** tab
3. Find previous deploy
4. Click **"Publish deploy"**

---

**Your app is now live! 🎉**

Share the link: **https://starsound.netlify.app**
