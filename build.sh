#!/bin/bash

# cp views/pages/index_MASTER.ejs views/pages/index.ejs
git add .
git commit -m "New Version"
oldString="ETVERSION"
oldFile="views/pages/index_MASTER.ejs"
newVersion=$(npm version patch)
newFile="views/pages/index.ejs"
chmod 777 $newFile
sed  "s/$oldString/$newVersion/" $oldFile > $newFile
chmod 444 $newFile
git add .
git commit -m "SED Version"
git push origin Test02-EJS