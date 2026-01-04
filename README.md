# Mrs Andrea Burgess - ENT Consultant Website

## 🌐 Live Website

**GitHub Pages URL:** https://threeaimservices.github.io/ab4ent/

## Overview

A professional, clean website for Mrs Andrea Burgess, a Consultant ENT Surgeon based in Hampshire, UK. The site provides essential information and resources for prospective patients, with separate sections for adults and children.

## Key Features

- **Responsive Design**: Mobile-first approach that works on all device sizes
- **Patient-Focused**: Separate resource pages for adults and children
- **Child-Friendly Styling**: The children's page features bright, playful colors and larger fonts to make it more engaging for young patients and their parents
- **Accessibility**: WCAG 2.1 AA compliant
- **Performance**: Lightweight, fast-loading with plain HTML5, CSS3, and vanilla JavaScript

## Structure

```
ENT website 3/
├── index.html          # Home page with quick access to resources
├── adults.html         # Adult ENT conditions and advice
├── children.html       # Children's ENT conditions (with child-friendly styling)
├── css/
│   └── styles.css     # Main stylesheet with child-friendly overrides
├── js/
│   └── main.js        # Navigation and interactive features
├── images/            # Profile photos and hero images
├── docs/              # PDF advice sheets (to be added)
├── favicon.svg        # Site icon
└── README.md          # This file
```

## Child-Friendly Design Features

The children's page (`children.html`) includes special styling to make it more appealing and accessible for children:

- **Bright, Playful Colors**: Turquoise, coral, yellow, and other vibrant colors
- **Larger Fonts**: 18px base size with larger headings for easier reading
- **Rounded Corners**: All cards and buttons have extra rounded corners
- **Fun Gradients**: Colorful gradient backgrounds on sections and buttons
- **Interactive Elements**: Cards lift up on hover with playful shadows
- **Emoji Icons**: Download buttons feature emoji icons
- **Colorful Navigation**: Rainbow gradient navigation bar
- **Increased Line Height**: 1.8 line height for easier reading

## Technical Details

- **Stack**: Plain HTML5, CSS3, vanilla JavaScript (no frameworks)
- **Browser Support**: Modern browsers (Chrome, Firefox, Safari, Edge)
- **No Build Process**: Can be opened directly in a browser or served with any static file server
- **Hosting**: GitHub Pages with automatic deployment via GitHub Actions

## 🚀 Deployment

### Automatic Deployment (GitHub Pages)

This website is configured for automatic deployment to GitHub Pages:

1. **Push to main branch**: Any push to the `main` branch triggers automatic deployment
2. **GitHub Actions**: The `.github/workflows/deploy.yml` workflow handles deployment
3. **Live in minutes**: Changes appear at https://threeaimservices.github.io/ab4ent/ within 1-2 minutes

### Manual Deployment

If needed, you can trigger deployment manually:
1. Go to the repository on GitHub
2. Click "Actions" tab
3. Select "Deploy to GitHub Pages" workflow
4. Click "Run workflow"

### First-Time Setup (Already Configured)

The repository is already configured for GitHub Pages:
- ✅ `.nojekyll` file added (disables Jekyll processing)
- ✅ GitHub Actions workflow created
- ✅ Configured to deploy from `main` branch

**Note:** After the first push, you may need to enable GitHub Pages in the repository settings:
1. Go to Settings → Pages
2. Source should be set to "GitHub Actions"
3. The site will be available at: https://threeaimservices.github.io/ab4ent/

## 📝 Making Updates

To update the live website:

```bash
# Make your changes to HTML/CSS/JS files
git add .
git commit -m "Description of changes"
git push origin main

# GitHub Actions will automatically deploy within 1-2 minutes
```

## 🔧 Local Development

To test the website locally:

```bash
# Option 1: Simple Python server
python -m http.server 8000

# Option 2: Node.js http-server (if installed)
npx http-server

# Then open: http://localhost:8000
```

## Contact Information

For private consultations:
- **Sarum Road Hospital, Winchester**: Tracy Cousins - 07842 520577
- **Spire Southampton Hospital**: Karen Healey - 023 8076 4325

## Medical Disclaimer

The information on this website is for general guidance only and does not replace professional medical advice. Always consult a qualified healthcare professional for diagnosis and treatment of medical conditions.

---

**Mrs Andrea Burgess**
BMed Sci, BM BS, FRCS (ORL-HNS)
GMC: 4041924
