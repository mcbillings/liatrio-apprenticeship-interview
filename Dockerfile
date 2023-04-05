#Working off of Node.js's guide on Dockerizing a node.js application

#Building off of node image
FROM node:16

#creating app directory
WORKDIR /usr/src/app

#installing dependancies
COPY package*.json ./
RUN npm install

#copying other app files into docker container
COPY . .

#Exposing port
EXPOSE 3000

#Using cmd to run app
CMD ["node", "app.js"]