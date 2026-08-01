import json
from pathlib import Path
path = Path(r'C:\Users\MANISH\lab-panel\arixbyte-api\pterodactyl-webhosting-custom-egg.json')
text = path.read_text(encoding='utf-8')
data = json.loads(text)
new_script = '''#!/bin/sh
set -e
apk add --no-cache nginx php8 php8-fpm bash curl supervisor
mkdir -p /var/www/${WEBROOT:-public} /var/log/panel /etc/nginx /etc/supervisor.d
cat > /etc/nginx/nginx.conf <<'NGINX'
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
        listen ${HTTP_PORT:-8080} default_server;
        server_name ${PANEL_HOST:-_};
        root /var/www/${WEBROOT:-public};
        index index.php index.html index.htm;

        location / {
            try_files $uri $uri/ /index.php?$query_string;
        }

        location ~ /\\.php$ {
            fastcgi_split_path_info ^(.+\\.php)(/.+)$;
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            include fastcgi_params;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            fastcgi_param PATH_INFO $fastcgi_path_info;
        }

        location ~ /\\.well-known/acme-challenge/ {
            allow all;
        }
    }
}
NGINX
cat > /etc/supervisor.d/panel.conf <<'SUP'
[program:php-fpm]
command=php-fpm8 -F
autostart=true
autorestart=true
stdout_logfile=/var/log/panel/php-fpm.log
stderr_logfile=/var/log/panel/php-fpm_error.log

[program:nginx]
command=nginx -g 'daemon off;'
autostart=true
autorestart=true
stdout_logfile=/var/log/panel/nginx.log
stderr_logfile=/var/log/panel/nginx_error.log
SUP
cat > /start-panel.sh <<'SH'
#!/bin/sh
set -e
export WEBROOT=${WEBROOT:-public}
export HTTP_PORT=${HTTP_PORT:-8080}
export PHP_VERSION=${PHP_VERSION:-8.2}
export PANEL_HOST=${PANEL_HOST:-example.com}
exec supervisord -n -c /etc/supervisor.d/panel.conf
SH
chmod +x /start-panel.sh
'''
data['scripts']['installation']['script'] = new_script
path.write_text(json.dumps(data, indent=2), encoding='utf-8')
print('updated')
