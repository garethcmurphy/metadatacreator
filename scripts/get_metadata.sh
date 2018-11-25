#!/usr/bin/env bash
git checkout -- publish.json
git stash
git pull

npm start

