FROM node:18

RUN apt update -y && apt upgrade -y

RUN yarn global add  npm-check-updates

WORKDIR /svelte_hobby_blog
USER node


ENV HOST 0.0.0.0
