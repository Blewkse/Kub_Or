FROM node:18-alpine

WORKDIR /src/back

COPY package.json . 

RUN npm install 
RUN npm run migrate

COPY . . 

CMD ["npm", "run", "start"]
