# server/Dockerfile
FROM node:24-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=5000
ENV DATABASE_URL=postgres://user:pass@db:5432/mydb
ENV JWT_SECRET=mysecret

EXPOSE 5000

CMD ["npm", "start"]