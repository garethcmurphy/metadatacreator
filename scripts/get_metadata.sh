#!/usr/bin/env bash
git checkout -- publish.json
git stash
git pull

npm start


if [ "$(hostname)" == "r1n4.esss.dk" ]; then
	rsync -avz publish.json ssh0:
fi

