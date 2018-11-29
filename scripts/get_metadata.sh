#!/usr/bin/env bash
if [ "$(hostname)" == "r1n4.esss.dk" ]; then
	export HTTPS_PROXY="http://172.18.12.32:8123"
fi
git checkout -- publish.json
git stash
git pull

npm start


if [ "$(hostname)" == "r1n4.esss.dk" ]; then
	rsync -avz publish.json ssh0:
fi

