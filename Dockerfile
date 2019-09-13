FROM node:12.7-slim
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY index.js .
CMD ["npm", "run", "start"]
