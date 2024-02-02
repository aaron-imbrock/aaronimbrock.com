# aaronimbrock.com Deploy Process

1. Clone Repo
2. cd to repo folder and run `npm i`.
3. run `npm run build` - Build your production site to ./dist/
4. `rsync -avHP . aaronimbrock.com:/var/www/aaronimbrock.com/html/`
