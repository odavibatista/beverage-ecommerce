FROM node:18

WORKDIR /beverage-ecommerce

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5170

CMD [ "npm", "run", "create" ]