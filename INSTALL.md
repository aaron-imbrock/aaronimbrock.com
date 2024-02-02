# aaronimbrock.com Deploy Process

## Astro Clifs Notes

```sh
npm create astro@latest -- --template minimal
```

Tweaked version of the Astro Blog set up for use as a template.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Deploy Process

1. Clone Repo
2. cd to repo folder and run `npm i`.
3. run `npm run build` - which will build your production site to ./dist/
4. `rsync -avHP . aaronimbrock.com:/var/www/aaronimbrock.com/html/`

## SSL Setup

We're assuming a Debian derivitive here. Additionally we'll be using `Let's Encrypt!` and `NGINX`.

0. Configure DNS so that the A Record points to your IP Address. Set a very low TTL until you're sure everything's working.
1. `sudo apt install certbot python3-certbot-nginx`
2. Confirm the existing `server_name` line is correct:
```bash

server {
        listen 80;
        listen [::]:80;

        server_name aaronimbrock.com www.aaronimbrock.com;

        root /var/www/aaronimbrock.com/html;
        index index.html;

        location / {
                try_files $uri $uri/ =404;
        }
}

```
3. Are we allowing HTTPS traffic through the firewall?
4. Run `certbot` command:
   ```bash
   certbot --nginx -d aaronimbrock.com -d www.aaronimbrock.com
   ```
5. `certbot` will handle updating the domain config file to use `SSL/443` and the appropriate certifications.
   
   
