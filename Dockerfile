FROM ubuntu:xenial
LABEL maintainer="garethcmurphy@gmail.com"

 
RUN apt-get update && apt-get install --no-install-recommends -y \ 
    curl \
    libhdf5-dev  \ 
    make \
    python-software-properties \
    software-properties-common 
RUN add-apt-repository ppa:ubuntu-toolchain-r/test
RUN apt-get update && apt-get install -y g++-7
RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs
RUN update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-7 60  --slave /usr/bin/g++ g++ /usr/bin/g++-7
#RUN add-apt-repository ppa:ubuntu-toolchain-r/test -
#RUN apt-get update && apt-get install gcc-7 -y

COPY package.json /usr/src/app/
RUN npm install -g yarn

WORKDIR /usr/src/app/
RUN   npm install hdf5 --hdf5_home_linux=/usr/lib/x86_64-linux-gnu/hdf5/serial
RUN  npm install 
COPY * /usr/src/app/
RUN  npm test 
