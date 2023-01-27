FROM node:19-alpine AS build

WORKDIR /usr/src/backoffice

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build