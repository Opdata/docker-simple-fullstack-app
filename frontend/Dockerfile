FROM node:alpine as builder

WORKDIR /app

COPY pacakge*.json ./

RUN npm i

COPY ./ ./

RUN npm build

FROM nginx

EXPOSE 3000

COPY ./nginx/default.conf /ect/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

