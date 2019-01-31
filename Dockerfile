FROM node:11.8

RUN apt-get update && apt-get install -y libhdf5-dev gcc 

COPY package.json /usr/src/app/
RUN npm install -g yarn

RUN yarn config set hdf5_home_linux /usr/lib/x86_64-linux-gnu/
RUN yarn 
