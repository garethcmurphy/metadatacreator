FROM node:11.8

RUN apt-get update && apt-get install -y libhdf5-dev  software-properties-common gcc
#RUN add-apt-repository ppa:ubuntu-toolchain-r/test -y
#RUN apt-get update && apt-get install gcc-7 -y

COPY package.json /usr/src/app/
RUN npm install -g yarn

WORKDIR /usr/src/app/
RUN yarn config set hdf5_home_linux /usr/lib/x86_64-linux-gnu/hdf5/serial
RUN yarn 
RUN yarn add hdf5
