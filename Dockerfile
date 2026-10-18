FROM node:lts-slim
WORKDIR /opt/stacks/my_app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE my_port
CMD ["npm", "run", "start"]