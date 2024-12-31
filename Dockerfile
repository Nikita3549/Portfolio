FROM node:latest
WORKDIR opt/app
RUN npm install

CMD["npm", "start"]