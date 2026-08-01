# Pterodactyl Egg Companion Files

This folder contains companion files for the `pterodactyl-webhosting-custom-egg.json` egg definition.

Files:
- `start-panel.sh`: startup script used by the egg to start PHP-FPM and Nginx.
- `nginx.conf`: sample Nginx configuration for the webhosting panel.

Usage:
1. Copy `start-panel.sh` and `nginx.conf` into the server files managed by Pterodactyl.
2. Ensure the egg startup command is set to `bash ./start-panel.sh`.
3. Set server variables in the panel for `WEBROOT`, `PHP_VERSION`, `HTTP_PORT`, and `PANEL_HOST`.
4. Install or deploy the container using the egg definition from `pterodactyl-webhosting-custom-egg.json`.

If you want a custom Docker image for this egg, build the provided `Dockerfile` and push it to a container registry. Then set the egg's `docker_images` to point to that image.

Build example:

```sh
docker build -t ghcr.io/arixbyte/pterodactyl-webhosting-panel:latest ./pterodactyl-egg
docker push ghcr.io/arixbyte/pterodactyl-webhosting-panel:latest
```

The egg definition already includes this image as the first option.