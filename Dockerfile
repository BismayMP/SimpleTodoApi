FROM node

RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 8080
CMD ["npm", "start"]