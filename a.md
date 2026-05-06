# SoftKore Digital Working Instructions

These instructions should be followed when working on the SoftKore Digital site.

## Source of Truth

GitHub is the source of truth for the site.

Do not treat the Hetzner server as the main place where code changes live. Any site change should be made locally, checked, committed, pushed to GitHub, and then pulled on the server.

## Normal Deployment Flow

Run the local pre-deploy checks before committing:

```bash
npm run predeploy
```

Then commit and push:

```bash
git status
git add .
git commit -m "Describe the site change"
git push origin main
```

Then deploy from the server by pulling from GitHub:

```bash
ssh softkoredigital
cd /var/www/softkoredigital
git pull origin main
npm install
npm run predeploy
sudo cp deploy/redirects-softkore-nginx.conf /etc/nginx/snippets/softkore-redirects.conf
sudo nginx -t
sudo systemctl reload nginx
```

## Indexing Flow

After deploying new pages, submit the updated sitemap URLs:

```bash
npm run submit:indexnow
```

Only run this after the live site has the latest sitemap and the IndexNow verification file is available at:

```text
https://www.softkoredigital.co.za/b7f4c9a62e1d4a0f8c3b59d7126e4a90.txt
```

## Important Rule

Avoid copying generated site files directly to the server as the normal deployment method. Direct server copies can make the live site drift away from GitHub.

If an urgent server hotfix is ever needed, copy it only as a temporary measure, then immediately commit the same change locally and push it to GitHub.

## Current Server Details

- SSH alias: `softkoredigital`
- Repo path: `/var/www/softkoredigital`
- Live web root served by nginx: `/var/www/softkoredigital/out`
- Git branch: `main`
- GitHub remote: `https://github.com/Jabulanimsengi/softkore-digital.git`
