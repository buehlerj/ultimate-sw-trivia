FROM node:10.13.0 as build

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build-prod-deploy

FROM httpd:alpine3.14

WORKDIR /usr/local/apache2/htdocs
COPY --from=build /app/docs .