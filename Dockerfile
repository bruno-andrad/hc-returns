FROM node:20.10.0-alpine
ENV NODE_ENV=production

WORKDIR /app
ENV TZ="America/Sao_Paulo"
COPY ["package.json", "package-lock.json*", "./"]
RUN npm i
COPY . .

CMD ["node", "app.js"]