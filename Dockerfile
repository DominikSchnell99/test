# Compile and Build angular
FROM node:18.16.0 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Serve Nginx-Webserver to run node on
FROM nginx:alpine
COPY --from=node /app/dist/planmate-app /usr/share/nginx/html