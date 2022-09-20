FROM node:latest as node
WORKDIR /angular-frontend-login
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod
FROM nginx:alpine
COPY --from=node /angular-frontend-login/dist/angular-frontend-login usr/share/nginx/html