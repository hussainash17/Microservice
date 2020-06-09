FROM node:alpine

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --pure-lockfile
COPY ./ ./

CMD [ "yarn", "start" ]