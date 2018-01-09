FROM node:8.9.4

# app directory
WORKDIR /usr/src/app

# package.json & package-lock.json
COPY package.json ./
RUN npm install

# copy rest of the source
COPY . .

# default sails port
EXPOSE 1337

# start command
CMD [ "npm", "start" ]
