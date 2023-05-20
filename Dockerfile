FROM node:alpine

WORKDIR /app

COPY ./package*.json /app

RUN npm install

RUN npm install recharts

COPY . /app

CMD ["npm","start"]