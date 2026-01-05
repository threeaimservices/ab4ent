# Quick Start Guide

## I want to make a change right now

```bash
# 1. Get latest code
git checkout main
git pull origin main

# 2. Make your edits
# (Edit the files you need to change)

# 3. Save and push - site updates automatically!
git add .
git commit -m "Describe what you changed"
git push origin main

# Done! Your site will be live in 1-2 minutes
```

## I want to test before publishing

```bash
# 1. Get latest code
git checkout main
git pull origin main

# 2. Make your edits
# (Edit the files you need to change)

# 3. Test locally before pushing
python -m http.server 8000
# Open browser to: http://localhost:8000
# Check that everything looks good

# 4. Save and push when ready
git add .
git commit -m "Describe what you changed"
git push origin main
```

## Common File Locations

- **Home page text**: `index.html`
- **Adult resources**: `adults.html`
- **Children's resources**: `children.html`
- **Colors and styling**: `css/styles.css`
- **Interactive features**: `js/main.js`
- **PDFs**: `docs/` folder
- **Images**: `images/` folder

## Live Website

Your website is live at: **https://threeaimservices.github.io/ab4ent/**

Changes take 1-2 minutes to appear after merging.

## Need More Help?

See [WORKFLOW.md](WORKFLOW.md) for detailed instructions.
