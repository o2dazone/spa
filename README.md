# Getting Started
You'll more than likely want to pull the files of this package down but not the actual git history, so run this in your Terminal
`git clone --depth=1 https://github.com/o2dazone/spa.git application_name; rm -rf !$/.git`

## dev setup
`npm i && npm start`

## prod setup
`npm run build && NODE_ENV=production PORT=8480 npm start`