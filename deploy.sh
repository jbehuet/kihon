#!/bin/bash

# Reset
RCol='\033[0m'       # Text Reset

# Regular Colors
Bla='\033[0;30m';
Red='\033[0;31m';
Gre='\033[0;32m';
Yel='\033[0;33m';
Blu='\033[0;34m';
Pur='\033[0;35m';
Cya='\033[0;36m';
Whi='\033[0;37m';

echo -e "${Yel}------------"
echo -e " DEPLOYING"
echo -e "------------ ${RCol}"

# Build
echo -e "* Build : ${Gre}(1/4)${RCol}"
npm run build

# Adding new files
echo -e "* Add / Commit ${Gre}(2/4)${RCol}"
git add dist/ --force
git commit -m "Auto-deploy"

# Pushing to deploy branch
echo '* Push ${Gre}(3/4)${RCol}'
#git subtree push --prefix dist origin master

git push origin `git subtree split --prefix dist master`:master --force
#git push origin `git subtree split --prefix dist master`:master --force

# Cleaning
echo -e "* Cleaning ${Gre}(4/4)${RCol}"
rm -rf dist
git checkout dist

echo
echo '----------------------------------------------------------'
echo -e "Deployed to : ${Cya}https://jbehuet.github.io/aikido/#/${RCol}"
echo '----------------------------------------------------------'

