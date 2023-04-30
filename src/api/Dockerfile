FROM node:latest

WORKDIR /api
# Copy package.json with all dependencies in it
COPY . .
# Install dependencies with npm install
RUN npm install
# For documentation purposes only
EXPOSE 3080
# start service
CMD ["npm", "run", "dev"]