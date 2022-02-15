FROM node:17.4.0-alpine3.14 
COPY . /app
WORKDIR /app/

COPY package.json package-lock.json ./
RUN npm install 
RUN npm install react-scripts@3.4.1 -g 
COPY . ./
EXPOSE 3000