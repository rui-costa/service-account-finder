FROM node:lts-bullseye-slim

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

ENTRYPOINT [ "node", "main.js" ]
