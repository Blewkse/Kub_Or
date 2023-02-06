FROM node:18-alpine

WORKDIR /src/back

COPY package.json . 

RUN npm install 

COPY . . 

CMD ["npm", "run", "start"]
