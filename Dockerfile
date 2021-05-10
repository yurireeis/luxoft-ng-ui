FROM nginx:1.19.10-alpine

COPY dist/luxoft-test-ui /usr/share/nginx/html

COPY config/nginx.conf /etc/nginx/nginx.conf

COPY config/luxoft-ui.conf /etc/nginx/conf.d/default.conf