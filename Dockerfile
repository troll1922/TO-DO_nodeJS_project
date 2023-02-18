FROM node:12.18.1

WORKDIR /app

COPY . .

EXPOSE 3000

CMD [ "node", "index" ]