# Marshall Wilcox portfolio

A static site: `index.html`, `styles.css`, `script.js` and the screenshots in `assets/shots/`. There is no build step and nothing to install.

## Before you publish

1. **Add your resume.** Put your PDF in this folder and name it `resume.pdf`. The nav, hero, career section and contact section all link to it.
2. **Check the wording.** Project summaries and "What I delivered" bullets come from your resume. The captions describe what each screenshot shows. Edit anything that does not match what you did.
3. **Open `index.html` in a browser** to preview it. Fonts load from Google Fonts, so you need a connection to see the intended typeface.

## Publish on GitHub Pages

1. On github.com, choose **New repository**. For a personal address like `https://yourname.github.io`, name the repository exactly `yourname.github.io`. Any other name also works and publishes at `https://yourname.github.io/repo-name/`. Make it public.
2. Choose **uploading an existing file**, then drag in everything from this folder: `index.html`, `styles.css`, `script.js`, `resume.pdf` and the whole `assets` folder. Commit to the `main` branch.
3. Open **Settings, Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, pick `main` and `/ (root)`, then Save.
4. Wait a minute or two. The address appears at the top of the Pages settings.

With git instead:

```
git init
git add .
git commit -m "Add portfolio site"
git branch -M main
git remote add origin https://github.com/yourname/yourname.github.io.git
git push -u origin main
```

## Editing

- **Contact email:** search `index.html` for `mailto:` and `marshdog@outlook.com`.
- **Open to work badge:** search `Open to work` and delete the line if it does not apply.
- **Remove a screenshot:** delete its `<li>` in the "Every screen" list. If a project uses it, delete that step's `<li class="step">` too.
- **Colors and fonts:** the first lines of `styles.css` hold the palette and font.

## Notes

- Cart numbers visible in seven screenshots were covered with black boxes. Your original files are untouched.
- Screenshots show other companies' products (Fortnite, Candy Crush Soda Saga, Minecraft). The footer carries a disclaimer. Consider whether you want the pure game-art screens (Fortnite store, Candy Crush home) on a public page, since the owners' permission is not covered by that note.
