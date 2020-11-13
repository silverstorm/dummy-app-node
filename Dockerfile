FROM node:12.4.0-alpine as prod

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

CMD node app.js 
