#!/usr/bin/env bash
git checkout -- publish.json
git stash
git pull

npm start


if [ "$(hostname)" == "kubetest01.dm.esss.dk" ]; then
	rsync -avz publish.json ssh0:
fi

