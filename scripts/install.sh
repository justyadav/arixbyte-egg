#!/bin/bash
# Standalone installation script for local testing

set -e

echo "Setting up Arixbyte WebHost environment..."

# Install dependencies
apk add --no-cache nginx php83 php83-fpm php83-mysqli curl git unzip composer

# Create directory structure
mkdir -p /home/container/{webroot,logs,tmp,nginx/conf.d,php-fpm}

# Copy configuration
cp nginx/conf.d/default.conf /home/container/nginx/conf.d/
cp php-fpm/php.ini /home/container/php-fpm/

# Copy start script
cp docker/8.3/start.sh /home/container/start.sh
chmod +x /home/container/start.sh

echo "Installation complete. Run /home/container/start.sh to start the server."
