FROM node:latest

WORKDIR /svelte_hobby_blog

RUN apt update -y && apt upgrade -y

RUN yarn global add  npm-check-updates


ENV HOST 0.0.0.0
