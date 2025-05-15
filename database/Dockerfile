# database/Dockerfile
FROM postgres:16-alpine

COPY init.sql /docker-entrypoint-initdb.d/

ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=pass
ENV POSTGRES_DB=mydb

EXPOSE 5432