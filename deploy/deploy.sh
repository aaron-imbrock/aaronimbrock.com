#!/usr/bin/env bash

cd ~/src/aaronimbrock.com/
npm run build
rsync -avHP dist/ root@aaronimbrock.com:/var/www/aaronimbrock.com/html/
