FROM php:8.2-fpm-alpine

RUN apk add --no-cache nginx bash supervisor curl \
    && mkdir -p /var/log/panel /etc/nginx /etc/supervisor.d /home/container

WORKDIR /home/container

COPY start-panel.sh /home/container/start-panel.sh
COPY nginx.conf /etc/nginx/nginx.conf

RUN chmod +x /home/container/start-panel.sh

EXPOSE 8080

CMD ["bash", "./start-panel.sh"]
