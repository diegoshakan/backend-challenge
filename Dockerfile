FROM 289208114389.dkr.ecr.us-east-1.amazonaws.com/picpay/node:16-alpine as builder

ENV NODE_ENV build

WORKDIR /usr/app

# Install app dependencies and test
COPY . .
RUN npm install
#RUN npm run test:cov

# Build the project
RUN npm run build

FROM 289208114389.dkr.ecr.us-east-1.amazonaws.com/picpay/node:16-alpine as release

ENV NODE_ENV production
ENV NEW_RELIC_NO_CONFIG_FILE true

WORKDIR /usr/app

COPY --from=builder /usr/app/package*.json ./
COPY --from=builder /usr/app/node_modules/ ./node_modules/
COPY --from=builder /usr/app/dist/ ./dist/

ENTRYPOINT [ "node", "dist/src/main.js" ]
