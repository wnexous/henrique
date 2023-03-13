#!/usr/bin/env bash
docker stop henrique-web; docker rm henrique-web; docker run -d --name=henrique-web -p 4093:3000 -e 'VIRTUAL_PORT=3000' -e 'LETSENCRYPT_EMAIL=contato@experio.com.br' -e 'LETSENCRYPT_HOST=drhenriquestachon.com.br,www.drhenriquestachon.com.br' -e 'VIRTUAL_HOST=drhenriquestachon.com.br,www.drhenriquestachon.com.br' --network experio henrique-web
