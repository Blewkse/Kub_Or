FROM node:18-alpine

WORKDIR /src/client

COPY package.json . 

RUN npm install 

COPY . . 

ENV API_URL=http://api-devops:5000/

CMD ["npm", "run", "start"]
