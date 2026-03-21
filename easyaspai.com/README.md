# easyaspai.com — How to Edit Your Website

You can edit this website yourself using any text editor — no coding knowledge needed.

---

## Files

| File | What it is |
|------|-----------|
| `index.html` | The main page — all content lives here |
| `style.css`  | Colours, fonts, and layout |
| `images/`    | Drop your photos in here |
| `CNAME`      | Tells GitHub Pages to use easyaspai.com as the domain — don't edit this |

---

## How to edit content

Open **`index.html`**. Every section has a comment label, for example:

```
<!-- HERO  —  Edit the headline, tagline, and buttons -->
```

Find the section you want to change, edit the text, save the file, and commit.
The site will go live automatically within a minute or two.

### Common edits

**Change the headline**
```html
<h1>AI doesn't have to<br>be complicated</h1>
```

**Add your email address** — find both occurrences of `hello@easyaspai.com` and replace.

**Add your photo** — put your image in the `images/` folder, then find the grey placeholder box in the About section and replace it with:
```html
<img src="images/your-photo.jpg" alt="Olly Bray" style="width:200px;border-radius:10px;margin-bottom:1.5rem;">
```

---

## How to change colours

Open **`style.css`** and look at the `:root` block near the top:

```css
:root {
    --colour-primary:   #6c3fc5;   /* purple — main brand colour */
    --colour-accent:    #f5a623;   /* amber  — buttons & highlights */
    ...
}
```

Replace a hex code with any colour you like. Use [coolors.co](https://coolors.co) to pick colours.

---

## How changes go live

This repo is connected to GitHub Pages. When you push any change to the `main` branch,
GitHub automatically rebuilds and publishes the site — usually within 60 seconds.
