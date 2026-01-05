# Website Update Workflow

This guide explains how to make changes to your website safely and efficiently.

## Quick Start

### Making a Simple Change

```bash
# 1. Make sure you're on main and up to date
git checkout main
git pull origin main

# 2. Create a new branch for your changes
git checkout -b update/your-change-description

# 3. Make your changes to HTML/CSS/JS files
# Edit files as needed...

# 4. Test locally (optional but recommended)
python -m http.server 8000
# Visit http://localhost:8000 to test

# 5. Commit your changes
git add .
git commit -m "Description of what you changed"

# 6. Push to GitHub
git push -u origin update/your-change-description

# 7. Create a Pull Request on GitHub
# Go to: https://github.com/threeaimservices/ab4ent
# Click "Compare & pull request"
# Review changes and click "Create pull request"

# 8. Merge the Pull Request
# Once you're happy with the changes, click "Merge pull request"
# Your changes will automatically deploy to the live site within 1-2 minutes!
```

## Branch Naming Convention

Use descriptive branch names with prefixes:

- `update/` - For content updates (e.g., `update/contact-info`)
- `feature/` - For new features (e.g., `feature/booking-form`)
- `fix/` - For bug fixes (e.g., `fix/mobile-menu`)
- `design/` - For design changes (e.g., `design/new-colors`)

## Deployment Process

### Automatic Deployment

Your website automatically deploys when you merge changes to the `main` branch:

1. **You merge a Pull Request** → GitHub Actions triggers
2. **Workflow runs** (takes ~1-2 minutes)
3. **Live site updates** at https://threeaimservices.github.io/ab4ent/

You can watch the deployment progress:
- Go to your repository on GitHub
- Click the "Actions" tab
- See the running workflow

### Manual Deployment

If you need to redeploy without changes:

1. Go to repository → Actions tab
2. Click "Deploy to GitHub Pages" workflow
3. Click "Run workflow" → Select `main` branch → Run

## Testing Changes Locally

Before pushing changes, test them on your computer:

```bash
# Start a local server
python -m http.server 8000

# Open in browser
# http://localhost:8000
```

Test on different devices:
- Desktop browser
- Mobile browser (or use browser dev tools)
- Different browsers (Chrome, Firefox, Safari)

## Common Tasks

### Updating Text Content

1. Create branch: `git checkout -b update/content-changes`
2. Edit the HTML file (e.g., `index.html`, `adults.html`, `children.html`)
3. Commit and push
4. Create Pull Request
5. Merge when ready

### Updating Styles

1. Create branch: `git checkout -b design/style-updates`
2. Edit `css/styles.css`
3. Test locally to see changes
4. Commit and push
5. Create Pull Request
6. Merge when ready

### Adding New PDFs

1. Create branch: `git checkout -b update/add-pdf`
2. Add PDF to `docs/` folder
3. Update the relevant HTML page to link to it
4. Commit and push
5. Create Pull Request
6. Merge when ready

### Adding Images

1. Create branch: `git checkout -b update/add-images`
2. Add images to `images/` folder
3. Update HTML to reference the image
4. Commit and push
5. Create Pull Request
6. Merge when ready

## Emergency Rollback

If something goes wrong after deployment:

```bash
# 1. Find the last good commit
git log --oneline

# 2. Revert to it
git revert <commit-hash>

# 3. Push to main
git push origin main

# The site will automatically redeploy with the previous version
```

## Tips for Success

1. **Always test locally first** - Catch issues before they go live
2. **Make small, focused changes** - Easier to review and debug
3. **Write clear commit messages** - You'll thank yourself later
4. **Check Actions tab** - Make sure deployment succeeded
5. **View live site** - Verify changes after deployment

## Getting Help

- **Deployment Issues**: Check the Actions tab for error messages
- **Broken Links**: Test all links after updating
- **Mobile Issues**: Always test on mobile before merging

## Current Site Info

- **Live URL**: https://threeaimservices.github.io/ab4ent/
- **Main Branch**: `main` (protected - always use Pull Requests)
- **Deployment Time**: 1-2 minutes after merge
- **Build Tool**: GitHub Actions (see `.github/workflows/deploy.yml`)
