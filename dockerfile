FROM node:20-alpine3.17

WORKDIR /e-pmu
run npm install --global http-server
COPY package.json .
run npm install
COPY . .
run npm run build
cmd http-server ./build