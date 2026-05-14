# GenbaSense

Real-time collision prevention and surveillance for safer industrial operations.

**Live:** https://agvylegzhanin-r2d2.github.io/genbasense/

## Source files

| File | Purpose |
|------|---------|
| `index.html` | Main site (homepage) |
| `contact.html` | Contact / book a demo |
| `genbasense-i18n.js` | English / Japanese translations |
| `imgs/` | Site images |

## Local preview

```bash
python -m http.server 8000
```

Open http://localhost:8000

## Deploy

```powershell
.\deploy-to-github.ps1
```

Or manually:

```bash
git add .
git commit -m "Describe your changes"
git push
```

GitHub Pages redeploys automatically from `main`.

## Custom domain (Namecheap)

1. Repo **Settings → Pages → Custom domain** → your domain
2. Namecheap DNS: CNAME `www` → `agvylegzhanin-r2d2.github.io`
