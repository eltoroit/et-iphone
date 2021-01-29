#!/bin/bash

cp views/pages/index_MASTER.ejs views/pages/index.ejs
git add .
git commit -m "New Version"
oldString="ETVERSION"
newString=$(npm version patch)
file="views/pages/index.ejs"
sed  "s/$oldString/$newString/" $file