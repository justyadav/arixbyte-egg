#!/usr/bin/env bash
set -euo pipefail
sudo apt-get update
sudo apt-get install -y docker.io docker-compose-plugin nginx
sudo systemctl enable --now docker nginx
printf 'Ubuntu deployment scaffold prepared.\n'
