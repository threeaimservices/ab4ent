# ollybray.com — How to Edit Your Website

This is a simple, self-contained website you can edit yourself using any text editor
(Notepad on Windows, TextEdit on Mac, or VS Code if you want something nicer).

---

## Files

| File | What it is |
|------|-----------|
| `index.html` | The main page — this is where all the content lives |
| `style.css`  | Colours, fonts, and layout — tweak here to restyle the site |
| `images/`    | Put your photos in this folder |

---

## How to edit the content

Open **`index.html`** in a text editor. Every section is clearly labelled with a comment like:

```
<!-- HERO BANNER  —  Edit the headline and tagline -->
```

Just find the comment for the section you want to change, edit the text below it, and save.

### Common edits

**Change the headline**
```html
<h1>Hi, I'm Olly Bray</h1>
```
→ Replace `Hi, I'm Olly Bray` with whatever you want.

**Add your email address**
```html
<a href="mailto:hello@ollybray.com">hello@ollybray.com</a>
```
→ Replace both occurrences of `hello@ollybray.com` with your real address.

**Add your photo**
Find the `about-photo` block and replace it with:
```html
<img src="images/your-photo.jpg" alt="Olly Bray" style="width:200px;border-radius:8px;">
```
Then drop your photo file into the `images/` folder.

---

## How to change colours

Open **`style.css`** and look near the top for the `:root` block:

```css
:root {
    --colour-primary:   #2c5f8a;   /* main brand colour */
    --colour-accent:    #e8a020;   /* highlight colour  */
    ...
}
```

Replace the hex colour codes (e.g. `#2c5f8a`) with any colour you like.
Use a colour picker like [coolors.co](https://coolors.co) to find codes.

---

## Deploying the site

If this site is hosted on **GitHub Pages**, any files you push to the repository will go live automatically within a minute or two.

If you're using a hosting service, upload all the files (keeping the folder structure intact) via FTP or their file manager.
