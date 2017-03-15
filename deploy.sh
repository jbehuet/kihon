#!/bin/bash -x

echo "----------------------"
echo "Deploying"
echo "----------------------"

# Ensuring npm deps are installed
npm install

# Cleaning dist directory
rm -rf dist/

# Build
npm run build

# Copy all public files
cp -r public/* dist/


# Adding files, removing missing files (including files with spaces as well)
git add -f dist
git commit -m "Auto-deploy"

# Pushing to deploy branch
git subtree push --prefix dist origin master
