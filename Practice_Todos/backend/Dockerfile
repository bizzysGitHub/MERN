FROM node:lts-alpine3.19
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE $BACKEND_PORT
CMD [ "npm","run", "dev"]