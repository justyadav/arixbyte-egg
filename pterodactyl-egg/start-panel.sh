#!/bin/sh
set -e

WEBROOT="${WEBROOT:-public}"
HTTP_PORT="${HTTP_PORT:-8080}"
PHP_VERSION="${PHP_VERSION:-8.2}"
PANEL_HOST="${PANEL_HOST:-example.com}"

# Ensure webroot exists and correct permissions
mkdir -p /var/www/$WEBROOT
chown -R nginx:nginx /var/www/$WEBROOT

# Generate runtime nginx configuration if using dynamic environment values
cat > /etc/nginx/nginx.conf <<NGINX
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log warn;
pid /var/run/nginx.pid;

events { worker_connections 1024; }

http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    sendfile on;
    keepalive_timeout 65;
    server_tokens off;
    server {
        listen ${HTTP_PORT};
        server_name ${PANEL_HOST};
        root /var/www/${WEBROOT};
        index index.php index.html index.htm;

        location / {
            try_files $uri $uri/ /index.php?$query_string;
        }

        location ~ \.php$ {
            fastcgi_split_path_info ^(.+\.php)(/.+)$;
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            include fastcgi_params;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            fastcgi_param PATH_INFO $fastcgi_path_info;
        }

        location ~ /\.well-known/acme-challenge/ {
            allow all;
        }
    }
}
NGINX

# Start services with supervisord if available, otherwise start directly.
if command -v supervisord >/dev/null 2>&1; then
  exec supervisord -n
else
  if command -v php-fpm >/dev/null 2>&1; then
    php-fpm -F &
  elif command -v php-fpm8 >/dev/null 2>&1; then
    php-fpm8 -F &
  else
    echo "ERROR: PHP-FPM not found"
    exit 1
  fi
  exec nginx -g 'daemon off;'
fi
