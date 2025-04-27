FROM node:22.11.0

WORKDIR /var/www/server

COPY package.json ./

RUN npm install

COPY ./tsconfig.json ./
COPY ./src ./src

RUN ./node_modules/.bin/tsc

CMD ["node", "dist/server.js"]
