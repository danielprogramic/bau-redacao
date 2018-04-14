# Pull base image.
FROM node:latest

RUN npm install --global npm@5.6.0

COPY ./webapp  frontend/

WORKDIR /frontend/webapp
RUN npm install
ENTRYPOINT npm start
EXPOSE 5000
