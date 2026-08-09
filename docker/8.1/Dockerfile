FROM alpine:latest

RUN apk add --no-cache --update \
    nginx \
    php84 \
    php84-fpm \
    php84-mysqli \
    php84-pdo \
    php84-pdo_mysql \
    php84-mbstring \
    php84-xml \
    php84-curl \
    php84-zip \
    php84-gd \
    php84-opcache \
    php84-tokenizer \
    curl \
    git \
    unzip \
    composer

RUN adduser -D -h /home/container container
WORKDIR /home/container
USER container

COPY nginx/ /etc/nginx/
COPY php-fpm/ /etc/php84/
COPY docker/8.4/start.sh /start.sh

EXPOSE 8080
CMD ["/bin/sh", "/start.sh"]
