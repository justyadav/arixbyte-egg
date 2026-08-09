#!/bin/sh
nginx -g "daemon off;" &
php-fpm84 -F
