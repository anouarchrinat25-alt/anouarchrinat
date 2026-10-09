# Networks & Security Portfolio

A static portfolio website (HTML, CSS, JavaScript). No build step, no dependencies.

## Structure

```
portfolio/
├── index.html          Home, About, Projects, Skills, Contact
├── project.html        Template used by every project page (project.html?id=...)
├── css/style.css       Design (dark/light theme, responsive)
├── js/data.js          ← YOUR CONTENT: profile, skills, projects
├── js/main.js          Rendering logic (you normally don't touch this)
└── assets/projects/<project-id>/   Screenshots of each project
```

## 1. Run it locally

**Easiest:** double-click `index.html`. It works without a server.

**Optional (local server):**
```bash
cd portfolio
python -m http.server 8000
# open http://localhost:8000
```

## 2. Personalize

Open `js/data.js` and replace the `TODO` values: your name, LinkedIn URL, GitHub URL, optional email, languages.
Skill levels are set to `beginner` as a starting point: change them honestly.

## 3. Add a new project

1. In `js/data.js`, copy the project block inside `projects: [ ... ]` and change:
   - `id` (unique, no spaces, e.g. `"vlan-lab"`)
   - `title`, `status` (`completed`, `in-progress`, `planned`), `summary`, `description`, `tools`, `skills`, `screenshots`
2. Create the folder `assets/projects/<id>/` and put your images there.
3. List each image in `screenshots` with its file name and a caption.

The card on the home page and the dedicated page (`project.html?id=<id>`) appear automatically.

## 4. Add or edit skills

In `js/data.js`, edit the `skills` list. Each skill has a `level`: `"beginner"`, `"intermediate"` or `"advanced"`.

## 5. Publish for free (GitHub Pages)

1. Create a GitHub account and a new **public** repository (e.g. `portfolio`).
2. Upload the contents of this folder (drag and drop in the GitHub web UI, or use git):
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/portfolio.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
4. After about a minute, your site is live at `https://<username>.github.io/portfolio/`.
   (Name the repo `<username>.github.io` to get `https://<username>.github.io/`.)

Alternatives, also free: **Netlify Drop** (drag the folder onto app.netlify.com/drop) or **Cloudflare Pages**.

Then put the live URL on your LinkedIn and GitHub profiles.
