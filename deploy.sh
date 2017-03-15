#!/bin/bash -x

echo "----------------------"
echo "Deploying"
echo "----------------------"

# Ensuring npm deps are installed
#npm install

# Cleaning dist directory
#rm -rf dist/

# Cloning deploy branch into dist directory
#git clone -b deploy https://github.com/jbehuet/aikido.git dist/

# Build
#npm run build

# Copy all public files
#cp -R public/* dist/

# Checking in dist/
#cd dist
# Adding files, removing missing files (including files with spaces as well)
#git add .
#if [ $(git ls-files --deleted | wc -l) -ne 0 ]; then git ls-files --deleted | sed -e 's/^/"/g' -e 's/$/"/g' | xargs git rm; fi;
#git commit -m "Auto-deploy"

# Pushing to deploy branch
#if [ $(ls -al | wc -l) -ge 10 ]; then git push origin deploy; else echo "Avoiding any push since there is an empty dist/ dir"; fi;
