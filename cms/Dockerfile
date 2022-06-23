FROM node:16-alpine

EXPOSE 1337
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
COPY package.json /app
COPY yarn.lock /app

RUN yarn install
COPY ./ /app/
RUN yarn build

ENTRYPOINT [ "yarn", "start" ]