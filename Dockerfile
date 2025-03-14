FROM node:18.20.2
WORKDIR /app

COPY package*.json ./
RUN npm install --build-from-source
COPY . .
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]