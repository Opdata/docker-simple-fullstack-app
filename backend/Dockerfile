FROM node:alpine

WORKDIR /app

COPY pacakge*.json ./

RUN npm i

COPY ./ ./

CMD ["npm","start"]