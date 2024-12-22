rm -rf node_modules
rm -rf dist
rm -rf coverage
rm -rf package-lock.json
npm cache clean --force
npm install -f
npm install rollup@latest