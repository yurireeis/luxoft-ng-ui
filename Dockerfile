FROM node:14.16.1-stretch as build

WORKDIR /app

RUN npm install -g @angular/cli

COPY package.json .

COPY package-lock.json .

RUN npm i

COPY angular.json .

COPY tsconfig.json .

COPY tsconfig.app.json .

COPY tslint.json .

COPY src src

RUN npm run build-prod

FROM nginx:1.19.10-alpine

COPY --from=build /app/dist/luxoft-test-ui /usr/share/nginx/html

COPY config/nginx.conf /etc/nginx/nginx.conf

COPY config/luxoft-test-ui-app.conf /etc/nginx/conf.d/default.conf