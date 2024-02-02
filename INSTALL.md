# aaronimbrock.com Deploy Process

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
   
   
