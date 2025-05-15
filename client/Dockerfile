FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies first for better caching
COPY package*.json ./
RUN npm install --force

# Copy all files
COPY . .

# Verify file structure
RUN ls -la && ls -la src/ && ls -la public/

# Build the app
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80