FROM node:latest

WORKDIR /usr/src/app

COPY . .

RUN npm config set legacy-peer-deps true && \
    npm install

EXPOSE 3003

CMD ["npm", "start"]