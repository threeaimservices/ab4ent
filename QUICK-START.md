# Quick Start Guide

## I want to make a quick change right now

```bash
# 1. Get latest code
git checkout main
git pull origin main

# 2. Create a branch
git checkout -b update/my-change

# 3. Make your edits
# (Edit the files you need to change)

# 4. Save and push
git add .
git commit -m "Describe what you changed"
git push -u origin update/my-change

# 5. Go to GitHub and create a Pull Request
# https://github.com/threeaimservices/ab4ent/pulls

# 6. Merge it and your site updates automatically!
```

## I want to test before publishing

```bash
# After step 3 above, test locally:
python -m http.server 8000

# Open browser to: http://localhost:8000
# Check that everything looks good
# Then continue with step 4
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
