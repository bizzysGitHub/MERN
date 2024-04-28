FROM node:lts-alpine3.19
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
EXPOSE 2345
CMD [ "npm","run", "dev"]