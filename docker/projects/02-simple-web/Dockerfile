# specify a base image
FROM node:14-alpine
# specify working directory
WORKDIR /app
# copy contents to working directory
COPY ./package.json .
# installing dependencies
RUN npm install 
COPY . .
# startup command
CMD [ "npm", "start" ]