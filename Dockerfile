FROM node:18-alpine AS builder
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app/
RUN npm i -f 
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["npm", "start"]

####################################################
FROM nginx:1.21-alpine AS web-server

RUN apk add python3 python3-dev py3-pip build-base libressl-dev musl-dev libffi-dev rust cargo

RUN pip3 install pip --upgrade

RUN pip3 install certbot-nginx

RUN mkdir /etc/letsencrypt

COPY nginx.conf /etc/nginx/conf.d/default.conf