# Website Brief: Mrs Andrea Burgess - ENT Consultant

## Overview

A professional, clean website for Mrs Andrea Burgess, a Consultant ENT Surgeon based in Hampshire, UK. The site should convey expertise, warmth, and accessibility while providing essential information for prospective patients.

## Technical Requirements

- **Stack**: Plain HTML5, CSS3, vanilla JavaScript (no frameworks)
- **Responsive**: Mobile-first design, works on all device sizes
- **Performance**: Lightweight, fast-loading
- **Accessibility**: WCAG 2.1 AA compliant
- **Version Control**: Git

## Folder Structure

```
andrea-burgess-ent/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   └── (placeholder images - to be replaced)
├── .gitignore
└── README.md
```

## Design Guidelines

### Colour Palette
- **Primary**: Deep teal or navy (professional, medical, calming)
- **Secondary**: Warm gold or soft green accent
- **Background**: Clean white or very light grey
- **Text**: Dark grey (#333) for readability

### Typography
- **Headings**: Clean sans-serif (e.g., system fonts like -apple-system, Segoe UI)
- **Body**: Readable, professional, 16px base size minimum

### Tone
- Professional but approachable
- Reassuring and calm
- Patient-focused

---

## Page Structure

### Single Page Layout (Initial Build)

The initial site will be a single-page design with the following sections:

#### 1. Header/Navigation
- Name: Mrs Andrea Burgess
- Title: Consultant ENT Surgeon
- Simple navigation links to page sections
- Sticky/fixed on scroll (optional)

#### 2. Hero Section
- Professional headline
- Brief welcome statement emphasising patient-centred care
- Tagline suggestion: "Expert ENT care for adults and children in Hampshire"

#### 3. About Section

**Professional Background:**
- Consultant ENT Surgeon since 2006 (20 years experience)
- Dual NHS practice at Hampshire Hospitals NHS Foundation Trust and University Hospital Southampton NHS Foundation Trust
- Trained at Nottingham University Medical School
- Specialist ENT training in London and Oxford

**International Fellowship Training:**
- Otology Fellowship - Kresge Hearing Research Institute, University of Michigan, USA (2001-2002)
- Paediatric and Head & Neck Fellowship - Royal Brisbane and Women's Hospital & Royal Children's Hospital, Queensland, Australia (2004-2005)

**Leadership Roles:**
- Associate Medical Director of Clinical Strategy, Hampshire Hospitals NHS Trust
- Clinical Director of Head and Neck Surgery, Hampshire Hospitals NHS Trust
- Paediatric Airway Co-Lead, University Hospital Southampton NHS Trust
- Council Member, British Association of Paediatric Otolaryngologists
- Council Member, British Laryngology Association

**Qualifications & Memberships:**
- BMed Sci, BM BS, FRCS (ORL-HNS)
- GMC Number: 4041924
- Fellow of the Royal College of Surgeons
- Member of ENT UK
- Member of the Royal Society of Medicine

**Publications:**
- Co-author of *The Oxford Handbook of ENT and Head & Neck Surgery*

**Awards:**
- Dr Munro Prize for Innovation 2018 (for establishing the paediatric airway service)

#### 4. Specialities Section

**Main Subspecialty Interests:**
- Paediatric ENT (children's ear, nose and throat)
- Otology (ear conditions)
- General adult ENT

**Key Achievement:**
- Co-founded the Wessex Children's Airway Service

**Conditions Treated:**

*Ear Problems:*
- Hearing difficulties and deafness
- Ear infections
- Perforated eardrums
- Cholesteatoma
- Tinnitus (ringing in the ears)
- Balance disorders
- Ear wax and blockages

*Nose & Sinus Problems:*
- Nasal blockage and congestion
- Rhinitis and sinusitis
- Nosebleeds (epistaxis)
- Adenoid problems

*Throat & Voice Problems:*
- Tonsillitis
- Snoring and sleep apnoea
- Breathing difficulties
- Neck lumps
- Voice problems
- Swallowing difficulties

#### 5. Practice Locations Section

**NHS Practice:**
- Royal Hampshire County Hospital, Winchester (Hampshire Hospitals NHS Trust)
- University Hospital Southampton (UHS NHS Foundation Trust)

**Private Practice:**
- Spire Southampton Hospital, Chalybeate Close, Southampton
- Sarum Road Hospital, Winchester (Circle Health Group)

*Note: Include a simple map or location indicators if desired in future*

#### 6. Contact Section

Display contact options for private enquiries:
- Placeholder for private secretary contact details (to be confirmed by Andrea)
- Note that private practice welcomes insured and self-pay patients
- Mention that all major UK health insurers are accepted

**Do NOT display NHS contact details** - private website should focus on private practice.

#### 7. Footer
- Copyright notice
- GMC registration number
- Simple disclaimer about medical advice
- Privacy policy link (placeholder for future)

---

## Content Notes for Development

### Placeholder Content Needed
- Professional headshot photograph (to be provided)
- Practice logos if permission granted
- Specific private secretary contact details

### Key Messaging Points
- 20 years of consultant experience
- Expertise with both adults and children
- International training and fellowship experience
- Published author in the field
- Leadership roles demonstrating standing in the profession
- As a mother of three, understands parental concerns (for paediatric context)

---

## Future Enhancements (Not for Initial Build)

- Patient testimonials section
- FAQ section
- Online appointment booking integration
- Blog/news section
- Detailed procedure information pages
- Multi-page structure if content grows

---

## SEO Considerations

- Page title: "Mrs Andrea Burgess | ENT Consultant | Hampshire"
- Meta description focusing on ENT services in Hampshire, Winchester, Southampton
- Semantic HTML structure
- Alt text for all images

---

## Git & Hosting Setup

### Repository
- Host on GitHub
- Include a `.gitignore` with:
```
.DS_Store
Thumbs.db
*.log
node_modules/
.vscode/
```
- Include a `README.md` with basic project information

### Hosting: GitHub Pages

**Initial/Test Site:**
- Deploy via GitHub Pages from the `main` branch (or `gh-pages` branch if preferred)
- Test URL will be: `https://<username>.github.io/<repo-name>/`

**Production (Later):**
- Andrea has purchased a custom domain
- Will configure GitHub Pages custom domain settings to point to her domain
- Ensure site works with both `www` and apex domain
- GitHub Pages provides free HTTPS for custom domains

**GitHub Pages Considerations:**
- Ensure all asset paths are relative (not absolute) so the site works in subdirectory hosting
- No server-side processing (static files only) - which suits our HTML/CSS/JS approach
- Add a `CNAME` file when custom domain is configured

---

## Notes

- Keep the initial build focused and simple
- Prioritise clarity and ease of navigation
- Ensure the site loads quickly and works without JavaScript for core content
- Use progressive enhancement for any interactive features