# server/Dockerfile
FROM node:24-slim
ENV NODE_OPTIONS="--max-old-space-size=2048"
ENV NPM_CONFIG_FETCH_RETRIES=5
ENV NPM_CONFIG_FETCH_TIMEOUT=60000
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV PORT=5000
ENV DATABASE_URL=postgres://user:pass@db:5432/mydb
ENV JWT_SECRET=mysecret

EXPOSE 5000

CMD ["npm", "start"]