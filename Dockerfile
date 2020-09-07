FROM bitnami/node:13-prod as build


ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

# install git for node packages that are on github
RUN apt-get update &&\
    apt-get -y install git

WORKDIR /app

COPY . .

RUN npm install --save-dev mkdirp

RUN npm run build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/build/ /usr/share/nginx/html/
COPY --from=build /app/public/ /usr/share/nginx/html/public
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
COPY docker-entrypoint.sh /
ENTRYPOINT ["/docker-entrypoint.sh"]
