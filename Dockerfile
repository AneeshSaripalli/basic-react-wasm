FROM rust:alpine

RUN apk add libstdc++ g++ libressl-dev

WORKDIR /app

COPY wasm ./wasm
RUN chmod +x ./wasm/install_deps.sh && ./wasm/install_deps.sh

FROM node:alpine
WORKDIR /app

COPY --from=0 /app /app

COPY package.json .
RUN npm update
RUN NODE_ENV=development npm install

COPY . .

CMD ["npm", "start"]