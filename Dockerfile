FROM node:12.4.0-alpine as prod

WORKDIR /app

COPY . .

RUN npm install

CMD node app.js 
