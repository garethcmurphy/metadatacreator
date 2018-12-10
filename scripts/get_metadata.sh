#!/usr/bin/env bash
if [ "$(hostname)" == "r1n2.esss.dk" ]; then
	# export HTTPS_PROXY="http://172.18.12.32:8123"
	ls
fi
if [ "$(hostname)" != "CI0020036" ]; then
git checkout -- publish.json
git stash
git pull
fi

npm start


if [ "$(hostname)" == "r1n2.esss.dk" ]; then
	rsync -avz publish.json ssh0:
fi

