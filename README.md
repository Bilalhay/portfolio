# portfolio

my personal portfolio site — built with plain html, css and js, no framework, no build step.

## how to put this on github pages

1. create a new repo on github, e.g. `yourusername.github.io` (use this exact name if you want it at the root of your github domain, otherwise any repo name works)
2. upload `index.html`, `style.css`, and `script.js` to the repo (drag and drop on github, or `git push`)
3. go to the repo's **Settings → Pages**
4. under "Source", pick the `main` branch and `/ (root)` folder, then save
5. wait a minute, then your site will be live at `https://yourusername.github.io` (or `https://yourusername.github.io/reponame` if you used a different repo name)

## before you publish

open `index.html` and update the placeholder links in the contact section:
- `your.email@example.com` → your real email
- `github.com/yourusername` → your github profile
- `linkedin.com/in/yourusername` → your linkedin profile (or remove that card if you don't have one)

you can also edit the project list and skills list directly inside `script.js`.
