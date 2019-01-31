FROM ubuntu:xenial

RUN apt-get update && apt-get install -y libhdf5-dev gcc nodejs

COPY package.json /usr/src/app/
RUN npm install
