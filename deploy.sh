#!/bin/bash -x

echo "----------------------"
echo "Deploying"
echo "----------------------"

# Ensuring npm deps are installed
npm install

# Cleaning dist directory
rm -rf dist/
mkdir dist/

# Cloning master branch (GH PAGES) into dist folder
git clone -b master https://github.com/jbehuet/aikido.git dist/

# Build
npm run build
cp -r public/* dist/

# Adding new files
cd dist/
git add .
git commit -m "Auto-deploy"

# Pushing to deploy branch
git push origin master

# Cleaning
cd ..
rm -rf dist
rm public/bundle.js
rm -r public/css/
git checkout public/index.html
